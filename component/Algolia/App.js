import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import styles from '../../css/App.module.css'

const App = (props) => {    

    const [ summaryOpen , setSummaryOpen ] = React.useState('');
    
    const {
        list 
    } = props;

    const handleSummaryOpen = (i) => {
        setSummaryOpen(i);
    }

    return(
        <React.Fragment>
            {list.map((row, i) => 
                    
                <div key={i} className={styles.listBlock} onClick={()=>{handleSummaryOpen(i)}}>
                    <span className={styles.title}>{row.title}</span>
                    <br/>
                    <span className={styles.author}>{'By ' + row.author_name}</span>
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

export default App;
