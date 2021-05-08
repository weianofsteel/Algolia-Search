  
import App from 'next/app'
import React from 'react';
import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const MyApp = ({ Component, pageProps }) => {
    
    const store = useStore(pageProps.initialReduxState)
    const persistor = persistStore(store, {}, function () {
        persistor.persist()
    })

    return(
        <React.Fragment>

            <Head>
                <title>Algolia Search</title>
            </Head>
    
            <Provider store={store}>
                <PersistGate 
                    persistor={persistor}
                >
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        
        </React.Fragment>
    )
}

export default MyApp