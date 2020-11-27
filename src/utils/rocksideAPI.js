
import config from '../config.json';

export const relayParams = async function() {
    const request = await fetch(`https://api.rockside.io/ethereum/mainnet/relay/${config.WITH_PERMIT}/params`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
    })
    const response = request.json()
    console.log(response)
    return response
}


export const relay = async function(data) {

    const body = {
        data: data,
        speed: "fastest"
    }

    const request = await fetch(`https://api.rockside.io/ethereum/mainnet/relay/${config.WITH_PERMIT}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body) // body data type must match "Content-Type" header
    })
    const response = request.json()
    console.log(response)
    return response
}



