import ACTION from '../actions/actionTypes';


const initialState = {
    isFetching: false,
    error: null,
    isSend: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.AUTH_ACTION_REQUEST: {
            return {
                isFetching: true,
                error: null,
                isSend: false,
            }
        }
        case ACTION.AUTH_ACTION_SUCCESS: {
            return {
                isFetching: false,
                error: null,
                isSend: false,
            }
        }
        case ACTION.AUTH_ACTION_ERROR: {
            return {
                isFetching: false,
                error: action.error,
                isSend: false,
            }
        }
        case ACTION.AUTH_ACTION_CLEAR_ERROR:{
            return{
                ...state,
                error: null,
                isSend: false,
            }
        }
        case ACTION.AUTH_ACTION_CLEAR:{
            return initialState;
        }
        case ACTION.AUTH_FORGOT_ACTION_SUCCESS: {
            return {
                isFetching: false,
                error: null,
                isSend: true,
            }
        }
        default:
            return state;
    }
}