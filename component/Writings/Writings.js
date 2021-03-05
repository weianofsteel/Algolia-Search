import React from 'react'
import Header from '../Public/Header'
import Banner from '../Public/Banner'
import Drawer from '../Public/Drawer'
import Footer from '../Public/Footer'
import Showcase from './component/Showcase'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dayBackground:{
        backgroundColor:'#F2F2F2',
        color:'#1F1F1F'
    },
    nightBackground:{
        backgroundColor:'#1F1F1F',
        color:'#FFFFFF'
    }
})

export const Writings = () => {

    const classes = useStyles();

    const [drawer, setDrawer] = React.useState(false);

    const [ mode, setMode ] = React.useState('day');

    const handleDrawerOpen = () => {
        setDrawer(true);
    }

    const handleDrawerClose = () => {
        setDrawer(false);
    }

    const handleMode = () => {
        if(mode === 'day') {
          setMode('night')
        }else{
          setMode('day')
        }
    }

    return(
        <React.Fragment>
            
            {drawer == false &&
                <React.Fragment>
                    <div className={mode==='day'?classes.dayBackground:classes.nightBackground}>
                    <div>
                        <Header
                            handleDrawerOpen={handleDrawerOpen}
                            handleMode={handleMode}
                            mode={mode}
                        />
                    </div>
                    
                    <div>
                        <Banner/>
                    </div>

                    <div>
                        <Showcase/>
                    </div>

                    <div>
                        <Footer/>
                    </div>
                    </div>
                </React.Fragment>
            }

            {drawer == true &&
                <React.Fragment>
                    <Drawer
                        handleDrawerClose={handleDrawerClose}
                    />
                </React.Fragment>
            }
            
        </React.Fragment>
    )
}