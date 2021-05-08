import React from 'react';
import { ServerStyleSheets } from '@material-ui/styles';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    
    render(){
        return(
            <Html>
                <Head>
                    
                    <link rel="shortcut icon" href="/logo.png"/>

                    <meta property="og:url" content="https://weianofsteel.com" />
                    <meta property="og:title" content="Algolia Search"/>
                    <meta
                        property="og:description"
                        content="An Algolia Search App built by React."
                    />
                    <meta property="og:image" content="https://raw.githubusercontent.com/weianofsteel/Algolia-Search/master/public/image/open-graph.png" />

                    <link 
                        href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" 
                        rel="stylesheet">
                    </link>

                    <link 
                        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" 
                        rel="stylesheet">
                    </link>

                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}

export default MyDocument;

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
  
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });
  
    const initialProps = await Document.getInitialProps(ctx);
  
    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  };