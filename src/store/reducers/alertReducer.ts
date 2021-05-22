import { AlertState, AlertAction, SET_ALERT } from '../types';

const initState: AlertState = {
    message: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action: AlertAction): AlertState => {
    switch(action.type) {
        case SET_ALERT:
            return {
                message: action.payload
            }
        default:
            return state;
    }
}