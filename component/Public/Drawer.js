import React from 'react'
import { i18n, withTranslation } from '../../i18n'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types'

const useStyles = makeStyles({
    main: {
        height:'100vh',
        overflowY:'hidden',
        backgroundColor:'#1f1f1f',
        paddingLeft:'8%', 
        paddingRight:'8%'
    },
    title: {
        fontFamily:'Bebas Neue ',
        fontWeight:400,
        letterSpacing:'1px',
        color:'#CACACA',
        fontSize:'2rem',
        "&:hover":{
            color:'white'
        }
    },
    drawerLink: {
        fontFamily:'Roboto',
        textAlign:'left',
        fontWeight:400,
        letterSpacing:'1px',
        color:'#CACACA',
        fontSize:'22px',
        "&:hover":{
            color:'white'
        }
    },
    drawerHeader: {
        marginTop:'3rem'
    },
    icon: {
        fontSize:'1.5rem',
        color:'#8F8F8F',
        "&:hover":{
            color:'white'
        }
    }
})

const Drawer = ({t,...props}) => {

    const classes = useStyles();

    const {
        handleDrawerClose,
        lang
    } = props;
    
    return(
        <React.Fragment>

            <div className={classes.main}>
                
                <Grid container>
                    <Grid item xs={6} md={2} style={{marginTop:'0.5rem'}}>
                    <Link 
                        href="."
                        underline='none'
                        className={classes.title}
                    >
                        WEIAN WANG
                    </Link>
                    </Grid>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={false} md={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={1} style={{textAlign:'right'}}>
                        <IconButton
                            style={{backgroundColor: 'transparent'}}
                            disableRipple={true}
                            onClick={handleDrawerClose}
                        >
                            <CloseIcon className={classes.icon}/>
                        </IconButton>
                    </Grid>
                </Grid>

                <Grid container className={classes.drawerHeader} style={{marginTop:'4rem'}}>
                    <Grid item xs={4}>
                        <Link href="/Work" underline='none' className={classes.drawerLink}>
                            {t('work')}
                        </Link>
                    </Grid>
                </Grid>    

                <Grid container className={classes.drawerHeader}>
                    <Grid item xs={4}>
                        <Link href="/Writings" underline='none' className={classes.drawerLink}>
                            {t('writings')}
                        </Link>
                      
                    </Grid>
                </Grid>

                <Grid container className={classes.drawerHeader}>
                    <Grid item xs={4}>
                    
                    </Grid>
                </Grid>    

            </div>

        </React.Fragment>
    )
}

Drawer.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('header')(Drawer)