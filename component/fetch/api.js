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

import {fetchJson,stringifyUrl} from './request';
import {terminateAndCreateSignal} from '../components/Public/Table/termial';

export function createCity(requestData) {
    return fetchJson('/api/citys', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/ld+json'
        }
    });
}

export function updateCity(requestData, id) {
    return fetchJson('/api/citys/' + id, {
        method: 'PATCH',
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/merge-patch+json'
        }
    });
}

export function deleteCity(requestData, id) {
    return fetchJson('/api/citys/' + id, {
        method: 'DELETE',
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/merge-patch+json'
        }
    });
}

export function getCitys(conditions, terminal) {

    const signal = terminateAndCreateSignal(terminal);

    const url = stringifyUrl({
        url: '/api/citys',
        query: conditions
    });

    return fetchJson(url, {
        signal: signal,
        method: 'GET',
        headers: {
            'Content-Type': 'application/ld+json'
        }
    })
}

export function getCity(id, terminal) {

    const signal = terminateAndCreateSignal(terminal);

    const url = stringifyUrl({
        url: '/api/citys/' + id,
    });

    return fetchJson(url, {
        signal: signal,
        method: 'GET',
        headers: {
            'Content-Type': 'application/ld+json'
        }
    })
}