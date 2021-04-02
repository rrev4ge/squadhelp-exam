import ACTION from './actionTypes';

export const setEventAction=(userId, data)=>{
    return{
        type: ACTION.SET_EVENT_ACTION,
        store: 'eventsStore',
        userId,
        data
    }
};

export const setEventRequest=()=>{
    return{
        type: ACTION.SET_EVENT_REQUEST,
    }
};

export const setEventSuccess=(event)=>{
    return{
        type: ACTION.SET_EVENT_SUCCESS,
        event
    }
};

export const setEventError=(error)=>{
    return{
        type: ACTION.SET_EVENT_ERROR,
        error
    }
};

export const getEventsAction=(userId)=>{
    return{
        type: ACTION.GET_EVENTS_ACTION,
        store: 'eventsStore',
        userId
    }
};

export const getEventsRequest=()=>{
    return{
        type: ACTION.GET_EVENTS_REQUEST,
    }
};

export const getEventsSuccess=(events)=>{
    return{
        type: ACTION.GET_EVENTS_SUCCESS,
        events
    }
};

export const getEventsError=(error)=>{
    return{
        type: ACTION.GET_EVENTS_ERROR,
        error
    }
};

export const clearEventsStore=()=>{
    return{
        type: ACTION.CLEAR_EVENTS_STORE,
    }
};