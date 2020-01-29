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