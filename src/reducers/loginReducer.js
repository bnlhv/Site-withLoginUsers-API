import * as constants from '../constants/constants'

const isLoggedLocalStorage = window.localStorage.getItem('isLogged');

const initialState = {
        isLogged: (isLoggedLocalStorage !== null ? (isLoggedLocalStorage === 'true') : false),
        users: {
            page: null,
            per_page: null,
            total: null,
            total_pages: null,
            data: []
        },
        user: {
            id: null,
            email: null,
            first_name: null,
            last_name: null,
            avatar: null    
        }
};

const loginReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case constants.LOGIN_SUBMIT:
            console.log(actions.payload);
            window.localStorage.setItem('isLogged', actions.payload)
            return { ...state, isLogged: actions.payload }
        case constants.SET_USERS:
            return { ...state, users: actions.payload }
        case constants.SET_USER:
            console.log('login reducer', actions.payload)
            return { ...state, user: actions.payload }
        default:
            return state
    }
}

export default loginReducer;