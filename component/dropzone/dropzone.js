// import React, {memo, useCallback, useEffect, useState} from 'react';
// import uuid from 'uuid/v4';
// import {getToken} from "../../../api/request";

// let DropzoneJS;
// if (typeof window !== "undefined"){
//     DropzoneJS = require('dropzone');
//     DropzoneJS.autoDiscover = false;
//     DropzoneJS.prototype.defaultOptions.dictFileTooBig = "檔案大小不可超過: {{maxFilesize}}MiB.";
// }

// const DropZone = (function(props){
//     const {
//         className,
//         path,
//         successCallBack,
//         addReference,
//         sendingCallBack,
//         autoProcessQueue=true,
//         init,
//         maxFilesize=10,
//         maxFile=10,
//         tabIndex=undefined,
//     } = props;

//     const [uniqueId] = useState(className+'-'+uuid());
//     const [dropZone,setDropZone] = useState(null);

//     let successEvent = function(file, data) {
//         if(typeof (data)=="string"){
//             data = JSON.parse(data);
//         }

//         if (addReference){
//             addReference(data,file);
//         }

//         setTimeout(function(file) {
//             this.removeFile(file);
//         }.bind(this, file), 1000)
//         if (successCallBack){
//             successCallBack();
//         }
//     }

//     useEffect(() => {
//         let dropZoneJS  = new DropzoneJS('#'+uniqueId, {
//             paramName: 'file',
//             withCredentials: true,
//             autoProcessQueue:autoProcessQueue,
//             url: path,
//             timeout:900000,
//             maxFiles:maxFile,
//             maxFilesize:maxFilesize,
//             headers: {
//                 'Cache-Control': null,
//                 'X-Requested-With': null,
//                 'Accept':[ "application/ld+json", "application/json"],
//                 "Authorization":'Bearer ' + getToken()
//             },
//             init: function() {
//                 this.on('success', successEvent);

//                 if (init){
//                     init(this)
//                 }

//                 if (sendingCallBack){
//                     this.on('sending',sendingCallBack.bind(this));
//                 }

//                 this.on('error', function(file, data) {



//                     if (typeof data == "string"){
//                         try {
//                             data =  JSON.parse(data);
//                         } catch (e) {}
//                     }

//                     if (data["hydra:description"]) {
//                         this.emit('error', file, data["hydra:description"]);
//                     }
//                 });

//             }
//         });
//         setDropZone(dropZoneJS);
//         return function cleanup() {};
//     },[uniqueId]);

//     useEffect(function() {
//         if (dropZone){
//             dropZone.off("success").on('success',successEvent)
//             if (sendingCallBack){
//                 dropZone.off("sending").on('sending',sendingCallBack.bind(dropZone));
//             }
//         }
//     });

//     return (
//         <div  tabIndex={tabIndex}>
//             <form
//                 style={{width:"100%",minHeight:"300px"}}
//                 id={uniqueId}
//                 method="POST"
//                 encType="multipart/form-data"
//                 className={"dropzone needsclick js-reference-dropzone "+className}
//             >
//                 <div className="dz-default dz-message" style={{paddingTop:"90px"}}>
//                     <span>
//                         將文件放在此處或點擊以上傳。<br/>
//                     </span>
//                 </div>
//             </form>
//         </div>
//     )
// })

// export default DropZone;