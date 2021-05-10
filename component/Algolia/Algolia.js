import React from 'react';
import styles from '../../css/App.module.css';
import List from './List';
import algoliasearch from 'algoliasearch/lite';
import { useDispatch } from 'react-redux';
import { toStartSearching, toFinishSearching } from '../../store';
import { APP_ID, API_KEY, indexName } from '../../config';

const client = algoliasearch(
    APP_ID,
    API_KEY,
    {protocol: 'https:'}
);

const index = client.initIndex(indexName);

const Algolia = () => {

    const dispatch = useDispatch()
    const [ inputValue, setInputValue ] = React.useState('');
    const [ list , setList ] = React.useState([]);
    const [ listLength , setListLength ] = React.useState(0);
    const [ pageSelected, setPageSelected ] = React.useState(1);

    //搜尋
    const handleChange = (e) => {

        dispatch(toStartSearching());//搜尋中
        setPageSelected(1);//重新搜尋設定頁碼為1
        
        if(e.target.value){
            index
            .search(e.target.value,{
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

        setInputValue(e.target.value);
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
                                value={inputValue}
                                data-testid="searchInput"
                                className={styles.input}
                                onChange={handleChange}
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