import React, { useEffect } from 'react';
import styles from '../../css/App.module.css';
import { useSelector } from 'react-redux';

const List = (props) => {    

    const [ summaryOpen , setSummaryOpen ] = React.useState('');
    const [ hover , setHover ] = React.useState('');

    const isSearching = useSelector((state) => state.isSearching);

    // 搜尋更新時清空summary開關
    useEffect(()=>{
        setSummaryOpen('');
      },[isSearching])

    //控制summary開關  
    const handleSummaryOpen = (i) => {
        if(summaryOpen === i) {
            setSummaryOpen('');
        }else {
            setSummaryOpen(i);
        }
    }

    // 游標移至表單
    const handleMouseOver = (i) => {
        setHover(i);
    }
    
    // 游標離開表單
    const handleMouseLeave = () => {
        setHover('');
    }

    const {
        list,
        listLength
    } = props;

    return(
        <React.Fragment>
            
            {/* 搜尋狀態和搜尋結果 */}
            {isSearching?
                <div className={styles.dataAmount}>
                    Searching...
                </div>:
                <div className={styles.dataAmount}>
                    {listLength} posts found
                </div>
            }

            {/* 搜尋結果list */}
            {list.map((row, i) => 
                    
                <div 
                    key={i} 
                    className={hover===i?styles.listBlockOnHover:styles.listBlock} 
                    onClick={()=>{handleSummaryOpen(i)}}
                    onMouseOver={()=>{handleMouseOver(i)}}
                    onMouseLeave={()=>{handleMouseLeave(i)}}
                >
                    <span className={styles.title}>{row.title}</span>
                    <div className={styles.author} style={{marginTop:'10px'}}>{'By ' + row.author_name}</div>
                    {summaryOpen === i &&
                        <div className={styles.summaryBlock}>
                            <span className={styles.summary}>{'By' + row.summary}</span>
                        </div>
                    }
                </div>
            )}
        </React.Fragment>
    )
}

export default List;
