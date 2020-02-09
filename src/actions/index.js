export const changeLogged = (person) => {
    return{
        type: 'SIGN_IN',
        payload: person
    }
}

export const changeLocation = (lat, long) => {
    return {
        type: 'COORDS',
        lat: lat,
        long: long
    }
}

export const changeAdd = (address) => {
    return {
        type: 'ADDY',
        address: address
    } 
}

export const changeRadius = (num) => {
    return {
        type: 'RADIUS',
        radius: num
    }
}

export const changeBeach = (obj) => {
    return {
        type: 'CURRENT',
        current: obj
    }
}

export const clickedBeach = (obj) => {
    return {
        type: 'BEACH',
        beach: obj
    }
}

export const allBeaches = (arr) => {
    return {
        type: 'ALL',
        all: arr
    }
}