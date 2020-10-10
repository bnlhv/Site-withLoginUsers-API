import * as constants from '../constants/constants'

export const changeSiteName = (newSiteName) => ({
        type: constants.CHANGE_SITE_NAME,
        payload: newSiteName
})


export const loginSubmit = (email, password) => {
        return async (dispatch) => {
                const body = {
                        email,
                        password
                }
                const options = {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body) 
                }
                fetch('https://reqres.in/api/login', options)
                .then( res => res.json())
                .then(data => {
                        const isLogged = typeof data.token !== 'undefined' && data.token !== ''
                        console.log('login action', data);
                        console.log('login action islogged', isLogged);
                        return dispatch({
                                type: constants.LOGIN_SUBMIT,
                                payload: isLogged
                        })
                })
        }
}

export const logoutSubmit = () => {
        return {
                type: constants.LOGIN_SUBMIT,
                payload: false
        }
}

export const getUsers = (pageNumber) => {
        return async (dispatch) => {
                fetch(`https://reqres.in/api/users?page=${pageNumber}}`)
                .then( res => res.json())
                .then(data => {
                        return dispatch({
                                type: constants.SET_USERS,
                                payload: data
                        })
                })
        }
}


export const getUser = (userID) => {
        console.log(userID);
        return async (dispatch) => {
                fetch(`https://reqres.in/api/users/${userID}`)
                .then( res => res.json())
                .then(data => {
                        console.log(data);
                        return dispatch({
                                type: constants.SET_USER,
                                payload: data.data
                        })
                })
        }
}