import React from 'react'
import algoliasearch from 'algoliasearch/lite';

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
    }

    render() {
        return(
            <React.Fragment>
                <div>hello</div>
            </React.Fragment>
        )
    }
    
}

export default App;
