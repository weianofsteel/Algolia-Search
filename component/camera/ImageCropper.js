// import Cropper from "react-cropper";
// import * as React from "react";
// import {withStyles} from '@material-ui/core';
// import {withSnackbar} from "notistack";
// import "cropperjs/dist/cropper.css";
// import CropIcon from "@material-ui/icons/Crop";
// import Button from "@material-ui/core/Button";
// import Grid from '@material-ui/core/Grid';
// import RotateLeftIcon from '@material-ui/icons/RotateLeft';
// import SaveAltIcon from '@material-ui/icons/SaveAlt';
// import uuid from 'uuid/v4';
// import {messageBarOpen} from './formHelper';
// import {uploadFile, uploadCapture} from '../../api/head_shot_api';
// import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

// const useStyles = theme => ({

// });

// class ImageCropper extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             initialImg:""
//         };

//         this._crop = this._crop.bind(this);
//         this.crop = this.crop.bind(this);
//         this.onCropperInit = this.onCropperInit.bind(this);
//         this.reset = this.reset.bind(this);
//         this.dataURLtoFile = this.dataURLtoFile.bind(this);
//         this.messageBarOpen = messageBarOpen.bind(this);
//         this.withoutCrop = this.withoutCrop.bind(this);
//     }

//     componentDidMount() {
//         this.setState({
//             initialImg: this.props.image
//         })
//     }

//     dataURLtoFile(dataurl, filename) {
//         var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
//             bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
//         while (n--) {
//             u8arr[n] = bstr.charCodeAt(n);
//         }
//         return new File([u8arr], filename, {type: mime});
//     }

//     _crop() {
//         // image in dataUrl
//     }

//     onCropperInit(cropper) {
//         this.cropper = cropper;
//     }

//     withoutCrop() {
//         const {setStateByName,imgStateName, headShotStateName, onClose } = this.props;
//         setStateByName("labor[img]", this.cropper.getCroppedCanvas({
//             width: 160,
//             height: 90,
//             minWidth: 256,
//             minHeight: 256,
//             maxWidth: 4096,
//             maxHeight: 4096,
//             fillColor: '#fff',
//             imageSmoothingEnabled: false,
//             imageSmoothingQuality: 'high',
//         }).toDataURL())

//         const {messageBarOpen} = this;
//         const imgString = this.cropper.getCroppedCanvas({
//             width: 160,
//             height: 90,
//             minWidth: 256,
//             minHeight: 256,
//             maxWidth: 4096,
//             maxHeight: 4096,
//             fillColor: '#fff',
//             imageSmoothingEnabled: false,
//             imageSmoothingQuality: 'high',
//         }).toDataURL();
//         const file = this.dataURLtoFile(
//             imgString,
//             uuid()+".jpg"
//         );

//         uploadFile(file).then(function(data) {
//             setStateByName(imgStateName, "/files/head_shot/" + data.fileName);
//             setStateByName(headShotStateName, data["@id"]);
//         }.bind(this)).catch(error => {
//             messageBarOpen(
//                 '處理失敗,請聯絡管理員,'
//                 + error +
//                 ',代碼:' + (error.response ? error.response.status : ""),
//                 'error'
//             );
//         });

//         onClose();
//     }

//     crop() {
//         const {setStateByName,imgStateName, headShotStateName } = this.props;
//         setStateByName("labor[img]", this.cropper.getCroppedCanvas({
//             width: 160,
//             height: 90,
//             minWidth: 256,
//             minHeight: 256,
//             maxWidth: 4096,
//             maxHeight: 4096,
//             fillColor: '#fff',
//             imageSmoothingEnabled: false,
//             imageSmoothingQuality: 'high',
//         }).toDataURL())

//         const {messageBarOpen} = this;
//         const imgString = this.cropper.getCroppedCanvas({
//             width: 160,
//             height: 90,
//             minWidth: 256,
//             minHeight: 256,
//             maxWidth: 4096,
//             maxHeight: 4096,
//             fillColor: '#fff',
//             imageSmoothingEnabled: false,
//             imageSmoothingQuality: 'high',
//         }).toDataURL();
//         const file = this.dataURLtoFile(
//             imgString,
//             uuid()+".jpg"
//         );

//         uploadFile(file).then(function(data) {
//             setStateByName(imgStateName, "/files/head_shot/" + data.fileName);
//             setStateByName(headShotStateName, data["@id"]);
//         }.bind(this)).catch(error => {
//             messageBarOpen(
//                 '處理失敗,請聯絡管理員,'
//                 + error +
//                 ',代碼:' + (error.response ? error.response.status : ""),
//                 'error'
//             );
//         });
//     }

//     reset() {
//         const {setStateByName } = this.props;
//         setStateByName("labor[img]", this.state.initialImg)
//     }

//     render() {

//         const {
//             image,
//             onClose
//         } = this.props;

//         return (
//             <React.Fragment>
//                 <Cropper
//                     src={image}
//                     style={{ height: 400, width: "100%" }}
//                     initialAspectRatio={302 / 400}
//                     //aspectRatio={302 / 400}
//                     autoCropArea={1}
//                     guides={true}
//                     crop={this._crop}
//                     onInitialized={this.onCropperInit}
//                 />
//                 <Grid container style={{marginTop:'4%'}} spacing={2}>
//                     <Grid item xs={4}>
//                         <Button
//                             variant="contained"
//                             color="default"
//                             startIcon={<SaveAltIcon size={"small"}/>}
//                             style={{width: "100%"}}
//                             size={"small"}
//                             onClick={this.withoutCrop}
//                         >
//                             儲存
//                         </Button>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Button
//                             variant="contained"
//                             color="default"
//                             startIcon={<RotateLeftIcon size={"small"}/>}
//                             style={{width: "100%"}}
//                             size={"small"}
//                             onClick={this.reset}
//                         >
//                             復原
//                         </Button>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Button
//                             variant="contained"
//                             color="default"
//                             startIcon={<CropIcon size={"small"}/>}
//                             style={{width: "100%"}}
//                             size={"small"}
//                             onClick={this.crop}
//                         >
//                             剪裁
//                         </Button>
//                     </Grid>
//                 </Grid>
//                 <Grid container style={{marginTop:'4%'}} spacing={2}>
//                     <Grid item xs={4}></Grid>
//                     <Grid item xs={4}></Grid>
//                     <Grid item xs={4}>
//                         <Button
//                             variant="contained"
//                             color="default"
//                             startIcon={<CancelPresentationIcon size={"small"}/>}
//                             style={{width: "100%"}}
//                             size={"small"}
//                             onClick={onClose}
//                         >
//                             關閉
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </React.Fragment>
//         );
//     }
// }

// export default withSnackbar( withStyles(useStyles)(ImageCropper) );