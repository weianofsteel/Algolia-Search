// import {apiUrl} from '../config/config';
// import jwtDecode from 'jwt-decode';
// import 'redux';
// import {userLogout, userLogoutSuccess} from '../redux/actions/actions';
// import 'core-js/features/url-search-params';
// import {refreshTime} from "../components/Layout/Timer";

// if (typeof window !=="undefined"){
//     require('whatwg-fetch');
// }


// let currentAuthToken;
// let refreshToken;

// export function setToken(token) {
//     currentAuthToken = token;
// }

// export function setRefreshToken(token) {
//     refreshToken = token;
// }

// export function getToken() {
//     return currentAuthToken;
// }


// function dealExpiration() {
//     if (!currentAuthToken){
//         return ;
//     }

//     var decoded = jwtDecode(currentAuthToken);

//     if (Date.now()/1000 > decoded.exp){
//         return fetchJsonWithoutAuth('/api/token/refresh',{
//             method: 'POST',
//             body: JSON.stringify({
//                 'refresh_token': refreshToken
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(function(response) {
//             setToken(response.token);
//             setRefreshToken(response.refresh_token);

//             return new Promise(function(resolve, reject) {
//                 resolve("success");
//             })
//         }).catch(function(e) {
//             return new Promise(function(resolve, reject) {
//                 reject("expire");
//             })
//         });
//     }
// }

// export async function fetchJson(url, options) {

//     refreshTime();

//     const res = await dealExpiration();

//     if (res=="expire"){
//         return Promise.reject(new Error('expire'));
//     }

//     const token = currentAuthToken;
//     let functionName = null;
//     if(typeof window !==  "undefined"){
//         functionName = window.location.pathname;
//         functionName = functionName.substr(1,functionName.length)
//     }

//     return fetch(apiUrl+url,  {
//         ...options,
//         credentials: 'include',
//         headers: {
//             ...options.headers,
//             Authorization: `Bearer ${token}`,
//             'x-customer': functionName
//         }
//     })
//     .then(checkStatus)
//     .then(response => {
//         return response.text().then(function(text) {
//            if(text==""){
//                return;
//            }else{
//                let json = '';

//                try {
//                    json = JSON.parse(text);
//                    return json;
//                } catch (e) {
//                    return Promise.reject("json text error");
//                }
//            }

//         });
//     });
// }

// //  報表下載
// export async function fetchDownload(url, options,fileName) {

//     refreshTime();

//     const res = await dealExpiration();

//     if (res=="expire"){
//         return Promise.reject(new Error('expire'));
//     }

//     const token = currentAuthToken;
//     return fetch(apiUrl+url,  {
//         ...options,
//         credentials: 'include',
//         headers: {
//             ...options.headers,
//             Authorization: `Bearer ${token}`
//         }
//     })
//         .then(checkStatus)
//         .then(response =>response.blob()).then(blob=>{
//             if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
//                 window.navigator.msSaveOrOpenBlob(blob , fileName);
//             }
//             else {
//                 var url = window.URL.createObjectURL(blob);

//                 var a = document.createElement('a');
//                 a.href = url;
//                 a.download = fileName;
//                 document.body.appendChild(a);
//                 a.click();
//                 a.remove();
//             }
//         });
// }

// export function fetchJsonWithoutAuth(url, options) {

//     refreshTime();

//     return fetch(apiUrl + url, Object.assign({
//         credentials: 'include',
//     }, options))
//     .then(function(response) {
//         if (response.status >= 200 && response.status < 400) {
//             return response;
//         }

//         const error = new Error(response.statusText);
//         error.response = response;
//         throw error;
//     })
//     .then(response => {
//         return response.text().then(function(text) {
//             let json = '';

//             try {
//                 json = JSON.parse(text);
//                 return json;
//             } catch (e) {
//                 return text;
//             }
//         });
//     });
// }

// function checkStatus(response) {
//     if (response.status >= 200 && response.status < 400) {
//         return response;
//     }

//     if (
//         response.status === 401
//     ) {
//         window.store.dispatch(userLogout());
//         return response;
//     }

//     const error = new Error(response.statusText);
//     error.response = response;
//     throw error;
// }

// export function stringifyUrl(param) {

//     const url = param.url??"";
//     const query = param.query??{};

//     let stringQuery = {};
//     let arrayQuery = {};
//     if(param.query){
//         for(let [key,value] of Object.entries(param.query) ){
//             //判斷query是否為array
//             if (!Array.isArray(value)){
//                 stringQuery[key] = value ;
//             }else {
//                 arrayQuery[key] = value ;
//             }
//         }
//     }


//     const urlParams = new URLSearchParams(Object.entries(stringQuery))
//     for (let [key,queries] of Object.entries(arrayQuery)){
//         for (let query of queries){
//             urlParams.append(key, query);
//         }
//     }

//     return url + "?" + urlParams.toString()
// }

// export async function fetchDownloadPdf(url, options,fileName) {

//     refreshTime();

//     const res = await dealExpiration();

//     if (res=="expire"){
//         return Promise.reject(new Error('expire'));
//     }

//     const token = currentAuthToken;
//     return fetch(apiUrl+url,  {
//         ...options,
//         credentials: 'include',
//         headers: {
//             ...options.headers,
//             Authorization: `Bearer ${token}`
//         }
//     })
//         .then(checkStatus)
//         .then(response =>response.blob()).then(blob=>{
//             if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
//                 window.navigator.msSaveOrOpenBlob(blob , fileName);
//             }
//             else {
//                 var url = window.URL.createObjectURL(blob);
//                 var a = document.createElement('a');
//                 a.href = url;
//                 a.download = fileName;
//                a.click();
//             }
//         });
// }