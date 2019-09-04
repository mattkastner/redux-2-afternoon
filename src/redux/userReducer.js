import axios from 'axios'

const initialState = { email: null, firstName: null, lastName: null }

//action types
const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export function requestUserData(){
    let userData = axios.get('/auth/user-data').then(response => response.data)
    return {
        type: REQUEST_USER_DATA,
        payload: userData
    }
}

export default function userReducer(state = initialState, action){
    switch(action.type){
        case REQUEST_USER_DATA + '_FULFILLED':
            const {email, firstName, lastName} = action.payload.user
            return {...state, email, firstName, lastName}
        default:
            return state
    }
}