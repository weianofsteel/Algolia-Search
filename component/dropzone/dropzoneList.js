// import React from 'react';
// import {apiUrl} from '../../../config/config';
// import Tooltip from "@material-ui/core/Tooltip";

// export default function DropZoneListRow({
//     file,
//     downloadPath,
//     openPath,
//     formType,
//     removeUploadFileReference
// }) {

//     return(
//         <li className="list-group-item align-items-center" style={{textAlign:"left"}}>
//             <div
//                 style={{
//                     marginTop:"5px",
//                     marginLeft:'2em',
//                     width:"calc(85% - 100px)",
//                     display:"inline-block",
//                     wordWrap:"break-word"
//                 }}
//             >
//                 {file.originalFileName}
//             </div>
//             <div
//                 className="pull-right"
//                 style={{
//                     marginTop: '-5px',
//                     width: '100px',
//                     display: 'inline-block'
//                 }}
//             >
//                 {
//                     openPath &&
//                     <Tooltip title="預覽" placement="top">
//                         <button
//                             onClick={function() {
//                                 window.open(
//                                     apiUrl + openPath + file.id,
//                                     file.originalFileName,
//                                     "height=897,width=630,modal=yes,alwaysRaised=yes"
//                                 );
//                             }}
//                             className="btn btn-link btn-sm"
//                         >
//                             <span
//                                 className="fa fa-search"
//                                 style={{verticalAlign:"center"}}
//                             >
//                             </span>
//                         </button>
//                     </Tooltip>
//                 }
//                 {
//                     downloadPath&&
//                     <Tooltip title="下載" placement="top">
//                         <button
//                             onClick={function() {
//                                 window.open(apiUrl + downloadPath + file.id);
//                             }}
//                             className="btn btn-link btn-sm"
//                         >
//                             <span
//                                 className="fa fa-download"
//                                 style={{verticalAlign:"center"}}
//                             >
//                             </span>
//                         </button>
//                     </Tooltip>
//                 }
//                 {
//                     removeUploadFileReference &&
//                     <Tooltip title="刪除" placement="top">
//                         <button
//                             className="js-reference-delete btn btn-link btn-sm"
//                             type="button"
//                             onClick={function() {
//                                 removeUploadFileReference(file.id);
//                             }}
//                             disabled={formType=='new'?false:true}
//                         >
//                             <span className="fa fa-trash"></span>
//                         </button>
//                     </Tooltip>
//                 }
//             </div>
//         </li>
//     );
// }