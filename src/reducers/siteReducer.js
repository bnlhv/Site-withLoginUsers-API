import * as constants from '../constants/constants'

const initState = {
    siteName: 'Youtube-React-Redux'
}

const siteReducer = (state = initState, action) => {
    switch (action.type){
        case constants.CHANGE_SITE_NAME:
            return {...state, siteName: action.payload }
        default:
            return state
    }
}

export default siteReducer;