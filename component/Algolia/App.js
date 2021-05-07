import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import styles from '../../css/App.module.css'

const client = algoliasearch(
    'XIMRNVJLQ7',
    'c73127fdd3af113650bd9b88eec377b5'
);

const index = client.initIndex('Community_articles_staging');

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }

        // this.handleSearch = this.handleSearch.bind(this);
        this.handleArrangeDate = this.handleArrangeDate.bind(this);
    }

    // handleSearch() {
    //     console.log(999);
    //     index
    //     .search(this.props.inputValue)
    //     .then(({ hits }) => {
    //         console.log(hits, 888);
    //         this.setState({list: hits})
    //     })
    //     .catch(err => {
    //         console.log(err, 777);
    //     });
    // }

    handleArrangeDate(data) {

    }

    render() {

        const {
           list 
        } = this.props;

        return(
            <React.Fragment>
                {/* <button onClick={this.handleSearch}>test</button>
                <button onClick={()=>{console.log(this.state.list, 666)}}>test2</button> */}
                {list.map((row, i) => 
                    
                    <div key={i} className={styles.listBlock} onClick={()=>{open = true;}}>
                        <span className={styles.title}>{row.title}</span>
                        <br/>
                        <span className={styles.author}>{'By ' + row.author_name}</span>
                        {open&&
                            <span className={styles.author}>{'By' + row.author_name}</span>
                        }
                    </div>
                )}
                {/* <div className={styles.listBlock}>
                    <span className={styles.title}>Hello</span>
                    <br/>
                    <span className={styles.author}>Weian</span>
                </div> */}
            </React.Fragment>
        )
    }
    
}

export default App;
