// import * as React from 'react';
// import Grid from '@material-ui/core/Grid';
// import img from '../../../img/blank-profile.jpg';
// import Button from '@material-ui/core/Button';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
// import Webcam from "react-webcam";
// import Modal from '@material-ui/core/Modal';
// import {withStyles} from '@material-ui/core';
// import {uploadFile, uploadCapture} from '../../api/head_shot_api';
// import {handleSubmitError, messageBarOpen} from './formHelper';
// import {withSnackbar} from 'notistack';
// import uuid from 'uuid/v4';
// import ImageCropper from './ImageCropper';
// import ImageCropperForUpload from './ImageCropperForUpload';
// import CropIcon from '@material-ui/icons/Crop';

// const useStyles = theme => ({
//     paper: {
//         position: 'absolute',
//         width: "370px",
//         height: "540px",
//         top: "20%",
//         margin: 'auto',
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// });

// class Camera extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             modalOpen: false,
//             modalOpen2: false,
//             modalOpen3: false,
//             resolutionHeight: 385,
//             resolutionWidth: 300
//         };

//         this.handleOpen = this.handleOpen.bind(this);
//         this.handleClose = this.handleClose.bind(this);
//         this.handleOpen2 = this.handleOpen2.bind(this);
//         this.handleClose2 = this.handleClose2.bind(this);
//         this.handleClose3 = this.handleClose3.bind(this);
//         this.messageBarOpen = messageBarOpen.bind(this);
//         this.capture = this.capture.bind(this);
//         this.handleUploadFile = this.handleUploadFile.bind(this);
//         this.webcamRef = React.createRef(null);
//         this.fileRef = React.createRef(null);
//     }

//     handleOpen(){
//         this.setState({
//             modalOpen:true
//         })
//     }

//     handleClose(){
//         this.setState({
//             modalOpen: false
//         });
//     }

//     handleOpen2(){
//         this.setState({
//             modalOpen2:true
//         })
//     }

//     handleClose2(){
//         this.setState({
//             modalOpen2: false
//         });
//     }

//     handleOpen3(){
//         this.setState({
//             modalOpen3:true
//         })
//     }

//     handleClose3(){
//         this.setState({
//             modalOpen3: false
//         });
//     }

//     dataURLtoFile(dataurl, filename) {
//         var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
//             bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
//         while (n--) {
//             u8arr[n] = bstr.charCodeAt(n);
//         }
//         return new File([u8arr], filename, {type: mime});
//     }

//     capture(){
//         const {setStateByName,imgStateName ,headShotStateName } = this.props;
//         const {messageBarOpen} = this;

//         const imgString = this.webcamRef.current.getScreenshot();
//         const file = this.dataURLtoFile(
//             imgString,
//             uuid()+".jpg"
//         );

//         setStateByName(imgStateName, imgString);

//         this.handleClose();
//         this.handleOpen2();
//     }

//     handleUploadFile(e){
//         const file = this.fileRef.current.files[0];
//         const {messageBarOpen} = this;
//         // const {setStateByName,imgStateName ,headShotStateName} = this.props;
//         // setStateByName(imgStateName, file);
//         console.log(999, file);
//         uploadFile(file)
//             .then(function(data) {
//                 setStateByName(imgStateName, "/files/head_shot/"+data.fileName);
//                 setStateByName(headShotStateName,data["@id"]);
//             }.bind(this))
//             .catch(error => {
//                 messageBarOpen(
//                     '處理失敗,請聯絡管理員,'
//                     + error +
//                     ',代碼:' + (error.response ? error.response.status : ""),
//                     'error'
//                 );
//             })
//         ;

//         this.handleOpen3();
//     }

//     render() {
//         const {classes, setStateByName, imgStateName, headShotStateName, formType} = this.props;

//         return (
//             <React.Fragment>

//                 <Grid container spacing={1} alignItems="flex-start">
//                     <Grid item xs={2}></Grid>
//                     <Grid
//                         item
//                         xs={10}
//                         style={{
//                             height: "246px",
//                             width:'200px',
//                             textAlign: "center",
//                             display: "block"
//                         }}
//                     >
//                         <div style={{backgroundColor:'#FFFFFF', width:'200px', height:'246px', textAlign: "center"}}>
//                         <img style={{
//                             width:'100%',
//                             maxHeight:'250.4px',
//                             border: "1px solid",
//                             backgroundColor:'#FFFFFF',
//                         }} src={this.props.img? this.props.img :img} alt="empty-profile"/>
//                         </div>
//                     </Grid>
//                 </Grid>
//                 <Grid container spacing={1} alignItems="flex-start" style={{marginTop:'8%'}}>
//                     <Grid item xs={6} style={{
//                         textAlign: "right",
//                         display: "block"
//                     }}>
//                         {formType === "new" || formType === "edit" ?
//                         <Button
//                             variant="contained"
//                             color="default"
//                             startIcon={<CloudUploadIcon size={"small"}/>}
//                             style={{width: "100%", maxWidth: "94px"}}
//                             size={"small"}
//                             component="label"
//                         >
//                             上傳
//                             <input
//                                 type="file"
//                                 style={{display: "none"}}
//                                 onChange={this.handleUploadFile}
//                                 ref={this.fileRef}
//                             />
//                         </Button>
//                         :''}
//                     </Grid>
//                     <Grid item xs={6} style={{
//                         textAlign: "left",
//                         display: "block"
//                     }}>
//                         {formType === "new" || formType === "edit" ?
//                         <Button
//                             variant="contained"
//                             color="default"
//                             startIcon={<PhotoCameraIcon size={"small"}/>}
//                             style={{width: "100%", maxWidth: "94px"}}
//                             size={"small"}
//                             onClick={this.handleOpen}
//                         >
//                             照相
//                         </Button>
//                         :''}
//                     </Grid>
//                 </Grid>

//                 <Modal
//                     aria-labelledby="simple-modal-title"
//                     aria-describedby="simple-modal-description"
//                     open={this.state.modalOpen}
//                     onClose={this.handleClose}
//                     style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                     }}
//                 >
//                     <div className={classes.paper}>
//                         <h2 id="simple-modal-title"></h2>
//                         <p id="simple-modal-description">
//                             <Webcam
//                                 audio={false}
//                                 height={385}
//                                 width={300}
//                                 ref={this.webcamRef}
//                                 screenshotFormat="image/jpeg"
//                                 forceScreenshotSourceSize
//                                 screenShotQuality={1}
//                                 videoConstraints={{
//                                     height: 1540,
//                                     width: 1200,
//                                     facingMode: "user"
//                                 }}
//                             />
//                             <Button
//                                 variant="contained"
//                                 color="default"
//                                 startIcon={<PhotoCameraIcon size={"small"}/>}
//                                 style={{width: "100%", marginTop:'8%'}}
//                                 size={"small"}
//                                 onClick={this.capture}
//                             >
//                                 照相
//                             </Button>
//                         </p>
//                     </div>
//                 </Modal>

//                 <Modal
//                     aria-labelledby="simple-modal-title"
//                     aria-describedby="simple-modal-description"
//                     disableBackdropClick={true}
//                     open={this.state.modalOpen2}
//                     onClose={this.handleClose2}
//                     style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                     }}
//                 >
//                     <div className={classes.paper}>
//                         <ImageCropper
//                             image={this.props.img}
//                             setStateByName={setStateByName}
//                             onClose={this.handleClose2}
//                             imgStateName={imgStateName}
//                             headShotStateName={headShotStateName}
//                         />
//                         <br/>
//                     </div>
//                 </Modal>

//                 <Modal
//                     aria-labelledby="simple-modal-title"
//                     aria-describedby="simple-modal-description"
//                     disableBackdropClick={true}
//                     open={this.state.modalOpen3}
//                     onClose={this.handleClose3}
//                     style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                     }}
//                 >
//                     <div className={classes.paper}>
//                         <ImageCropperForUpload
//                             image={this.props.img}
//                             setStateByName={setStateByName}
//                             onClose={this.handleClose3}
//                             imgStateName={imgStateName}
//                             headShotStateName={headShotStateName}
//                         />
//                         <br/>
//                     </div>
//                 </Modal>
//             </React.Fragment>
//         )
//     }

// }

// export default withSnackbar( withStyles(useStyles)(Camera) );