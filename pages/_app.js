import App from 'next/app'
import React from 'react';
import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from '../store'

const MyApp = ({ Component, pageProps }) => {
    
    const store = useStore(pageProps.initialReduxState)

    return(
        <React.Fragment>

            <Head>
                <title>Algolia Search</title>
            </Head>
    
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        
        </React.Fragment>
    )
}

export default MyApp