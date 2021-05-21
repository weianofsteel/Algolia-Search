import React, { useEffect } from 'react';
import styles from '../../css/App.module.css';
import { useSelector } from 'react-redux';

const List = (props) => {    

    const [ summaryOpen , setSummaryOpen ] = React.useState('');

    const isSearching = useSelector((state) => state.isSearching);

    useEffect(()=>{
        setSummaryOpen('');
      },[isSearching])

    const handleSummaryOpen = (i) => {
        if(summaryOpen === i) {
            setSummaryOpen('');
        }else {
            setSummaryOpen(i);
        }
    }

    const {
        list,
        listLength,
        handleToPage,
        inputValue,
        pageSelected
    } = props;

    let data = [];

    for(let i = 1; i < Math.ceil(listLength/100) + 1; i++) {
        data.push(
            <div key={i} className={styles.page}>
                <button 
                    className={pageSelected===i?styles.pageSelected:styles.pageButton}
                    onClick={()=>{
                        handleToPage(inputValue, i-1);
                    }}
                >
                    {i}
                </button>
            </div>
        )
    }

    return(
        <React.Fragment>
            
            {isSearching?
                <div data-testid="searchResult" style={{textAlign:'left'}}>
                    <div className={styles.dataAmount}>
                        Searching...
                    </div>
                </div>:
                <div data-testid="searchResult" style={{textAlign:'left'}}>
                    <div className={styles.dataAmount}>
                        {listLength} posts found
                    </div>
                    {listLength > 0 &&
                        <React.Fragment>
                            <div className={styles.pageBlock}>
                                Page
                            </div>
                            <div className={styles.pageList}>
                                {data}
                            </div>
                        </React.Fragment>
                    }
                </div>
            }

            <div id="list">
                {list.map((row, i) => 
                    <div 
                        key={i} 
                        className={styles.listBlock} 
                        onClick={()=>{handleSummaryOpen(i)}}
                        data-testid="dataList"
                    >
                        <span className={styles.title}>{row.title}</span>
                        <div className={styles.author} style={{marginTop:'10px'}}>{'By ' + row.author_name}</div>
                        {summaryOpen === i &&
                            <div className={styles.summaryBlock}>
                                <span className={styles.summary}>{ row.summary }</span>
                            </div>
                        }
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default List;
