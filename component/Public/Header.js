import React from 'react';
import { i18n, withTranslation } from '../../i18n';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from '../../css/Public/Header.module.css';
import Link from '@material-ui/core/Link';
import { useRouter } from 'next/router';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import {Select, Select2} from './PublicComponent';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import { useDispatch } from 'react-redux'
import { toDay, toNight, toEn, toZhHant } from '../../store'

const useStyles = makeStyles({
  title: {
    fontFamily:'Bebas Neue ',
    fontWeight:400,
    letterSpacing:'1px',
    fontSize:'1.7rem',
  },
  link: {
    fontFamily:'Roboto',
    fontWeight:400,
    letterSpacing:'1px',
    marginLeft: '32px',
    color:'#8F8F8F',
    fontSize:'1.1rem',
    "&:hover":{
        color:'black'
    }
  },
  nightLink: {
    fontFamily:'Roboto',
    fontWeight:400,
    letterSpacing:'1px',
    marginLeft: '32px',
    color:'#FFFFFF',
    fontSize:'1.1rem',
    "&:hover":{
        color:'#BDBDBD'
    }
  },
  linkAnchor: {
    fontFamily:'Roboto',
    fontWeight:400,
    letterSpacing:'1px',
    marginLeft: '32px',
    color:'black',
    fontSize:'1.1rem'
  },
  nightLinkAnchor: {
    fontFamily:'Roboto',
    fontWeight:400,
    letterSpacing:'1px',
    marginLeft: '32px',
    color:'#BDBDBD',
    fontSize:'1.1rem'
  },
  icon: {
    fontSize:'1.5rem',
    color:'#8F8F8F',
    "&:hover":{
        color:'#1F1F1F'
    }
  },
  nightIcon:{
    fontSize:'1.5rem',
    color:'#FFFFFF',
    "&:hover":{
        color:'#BDBDBD'
    }
  },
  formControl: {
    margin: '0.5rem',
    width:'6rem',
  },
  inputLabel: {
    fontSize:"17px",
    fontFamily:"微軟正黑體",
    display: "flex",
    flexDirection: "row-Reverse"
  }
})

const Header = ({t,...props}) => {

    const classes = useStyles();

    const router = useRouter();

    // const [ language, setLanguage ] = React.useState('en');

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
      // setLanguage(event.target.value);
      handleLangToRedux(event.target.value);
      i18n.changeLanguage(event.target.value);
    };

    const handleLangToRedux = (value) => {
      if(value == 'en') {
        dispatch(toEn())
      } 
      else if (value == 'zhHant') {
        dispatch(toZhHant())
      }
    }

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const dispatch = useDispatch()

    const {
      handleDrawerOpen,
      mode,
      lang
    } = props;

    return(
        <React.Fragment>
             
            <Grid container>

              <Grid item xs={6} md={2} style={{marginTop:'0.5rem'}}>
                  <Link 
                    href="."
                    underline='none'
                    className={classes.title}
                    style={{color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                  >
                    WEIAN WANG
                  </Link>
              </Grid>
              <Grid item xs={false} md={2}></Grid>
              <Grid item xs={false} md={2} lg={2}></Grid>
              <Hidden mdDown>
                <Grid item xs={2} style={{marginTop:'0.3rem', paddingLeft:'6%'}}>
                  <Select2
                      name="lang"
                      value={lang}
                      onChange={handleChange}
                      items={[
                          {value:'en',label:"English"},
                          {value:'zhHant',label:"中文"},
                      ]}
                      mode={mode}
                  />
                </Grid>
                <Grid item xs={1} style={{marginTop:'0.3rem',textAlign:'center'}}>
                  {mode === 'day'?
                    <IconButton
                      style={{backgroundColor: 'transparent',color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                      disableRipple={true}
                      onClick={()=>dispatch(toNight())}
                    >
                        <Brightness2OutlinedIcon fontSize='large'/>
                    </IconButton>:
                    <IconButton
                      style={{backgroundColor: 'transparent',color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                      disableRipple={true}
                      onClick={()=>dispatch(toDay())}
                    >
                      <WbSunnyOutlinedIcon fontSize='large'/>
                    </IconButton>
                  }
                </Grid>
                <Grid item xs={1} style={{marginTop:'1.5rem', marginLeft:(lang=='en'?'-1rem':'')}}>
                  {mode==='day'&&
                    <Link 
                      href="./Work"
                      underline='none'
                      className={router.pathname == '/Work'?classes.linkAnchor:classes.link}
                      style={{fontWeight:(lang=='en'?'normal':'bold')}}
                    >
                      {t('work')}
                    </Link>
                  }
                  {mode==='night'&&
                    <Link 
                      href="./Work"
                      underline='none'
                      className={router.pathname == '/Work'?classes.nightLinkAnchor:classes.nightLink}
                      style={{fontWeight:(lang=='en'?'normal':'bold')}}
                    >
                      {t('work')}
                    </Link>
                  }
                </Grid>
                <Grid item xs={1} style={{marginTop:'1.5rem', marginLeft:(lang=='en'?'-1rem':'')}}>
                  {mode==='day'&&
                    <Link 
                      href="./Writings"
                      underline='none'
                      className={router.pathname == '/Writings'?classes.linkAnchor:classes.link}
                      style={{fontWeight:(lang=='en'?'normal':'bold')}}
                    >
                      {t('writings')}
                    </Link>
                  }
                  {mode==='night'&&
                    <Link 
                      href="./Writings"
                      underline='none'
                      className={router.pathname == '/Writings'?classes.nightLinkAnchor:classes.nightLink}
                      style={{fontWeight:(lang=='en'?'normal':'bold')}}
                    >
                      {t('writings')}
                    </Link>
                  }
                </Grid>
                
                <Grid item xs={1} style={{marginTop:'1.5rem', marginLeft:(lang=='en'?'0.8rem':'')}}>
      
                </Grid>
              </Hidden>

              <Hidden lgUp>
                <Grid item xs={1} sm={2}></Grid>
                <Grid item xs={1}>
                  {mode === 'day'?
                    <IconButton
                      style={{backgroundColor: 'transparent',color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                      disableRipple={true}
                      onClick={()=>dispatch(toNight())}
                    >
                        <Brightness2OutlinedIcon fontSize='inherit'/>
                    </IconButton>:
                    <IconButton
                      style={{backgroundColor: 'transparent',color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                      disableRipple={true}
                      onClick={()=>dispatch(toDay())}
                    >
                      <WbSunnyOutlinedIcon fontSize='inherit'/>
                    </IconButton>
                  }
                </Grid>
                <Hidden smUp>
                  <Grid item xs={1}></Grid>
                </Hidden>
                <Grid item xs={1} style={{marginTop:'0.5rem',textAlign:'center'}}>
                    <Select
                      name="lang"
                      value={lang}
                      onChange={handleChange}
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      items={[
                          {value:'en',label:"English"},
                          {value:'zhHant',label:"中文"},
                      ]}
                      mode={mode}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1} style={{textAlign:'right'}}>
                  <IconButton
                    style={{backgroundColor: 'transparent'}}
                    disableRipple={true}
                    onClick={handleDrawerOpen}
                  >
                    <MenuIcon className={mode=='day'?classes.icon:classes.nightIcon}/>
                  </IconButton>
                </Grid>
              </Hidden>

            </Grid>

            {/* <Grid container>
                <p className={styles.ball}></p>
            </Grid> */}
             
        </React.Fragment>
    )
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
}


export default withTranslation('header')(Header)