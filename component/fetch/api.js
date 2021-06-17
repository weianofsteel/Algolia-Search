// export function getBranches(conditions, terminal) {

//     const signal = terminateAndCreateSignal(terminal);
//     const url = stringifyUrl({
//         url: '/api/branches',
//         query: conditions
//     });

//     return fetchJson(url, {
//         signal: signal,
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/ld+json'
//         }
//     })
// }

// export function getEverySession(id, terminal) {

//     const signal = terminateAndCreateSignal(terminal);
//     const url = stringifyUrl({
//         url: '/api/branchs/get_every_session/' + id,
//         // query: {}
//     });

//     return fetchJson(url, {
//         signal: signal,
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/ld+json'
//         }
//     })
// }