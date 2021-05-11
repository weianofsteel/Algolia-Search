import React, { useState, useEffect } from 'react';
import styles from '../../css/App.module.css';
import List from './List';
import algoliasearch from 'algoliasearch/lite';
import { useDispatch } from 'react-redux';
import { toStartSearching, toFinishSearching } from '../../store';

const client = algoliasearch(
    process.env.APP_ID,
    process.env.API_KEY,
    {protocol: 'https:'}
);

const index = client.initIndex(process.env.indexName);

const Algolia = () => {

    const dispatch = useDispatch();
    const [ inputValue, setInputValue ] = useState('');
    const [ list , setList ] = useState([]);
    const [ listLength , setListLength ] = useState(0);
    const [ pageSelected, setPageSelected ] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            handleSearch(searchValue);
        }, 1000)
    
        return () => clearTimeout(delayDebounce)
      }, [searchValue])

    //搜尋
    const handleSearch = (searchValue) => {

        dispatch(toStartSearching());//搜尋中
        setPageSelected(1);//重新搜尋設定頁碼為1
        
        if(searchValue){
            index
            .search(searchValue,{
                page:0,
                hitsPerPage:100
            })
            .then(({ hits, nbHits }) => {
                dispatch(toFinishSearching());//搜尋完成
                if(!hits[0]) {
                    setListLength(0);
                    setList([]);
                }else {
                    setListLength(nbHits);
                    setList(hits);
                }
            })
            .catch(err => {
                dispatch(toFinishSearching());
                alert('Woops! Try again!');
            }); 
        } else{
            setList([]);
            dispatch(toFinishSearching());
            setListLength(0);
        }

        setInputValue(searchValue);
    }

    //變換頁碼
    const handleToPage = (inputValue, i) => {
        dispatch(toStartSearching());
        setPageSelected(i + 1);
        index
        .search(inputValue,{
            page:i,
            hitsPerPage:100
        })
        .then(({ hits }) => {
            setList(hits);
            dispatch(toFinishSearching());
        })
        .catch(err => {
            dispatch(toFinishSearching());
            alert('Woops! Try again!');
        }); 
    }

    return(
        <React.Fragment>
            <div className={styles.box}>
                <div className={styles.outerBlock}>
                
                    <div className={styles.block} style={{paddingBottom:'5px'}}>

                        {/* 搜尋欄位 */}
                        <div className={styles.inputBackground}>
                            
                            <input
                                id="searchInput"
                                type="text"
                                value={searchValue}
                                data-testid="searchInput"
                                className={styles.input}
                                onChange={(e)=>{setSearchValue(e.target.value)}}
                                autoComplete="off"
                            />

                        </div>

                        {/* 列表 */}
                        <List
                            inputValue={inputValue}
                            listLength={listLength}
                            list={list}
                            handleToPage={handleToPage}
                            pageSelected={pageSelected}
                        />

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
} 

export default Algolia