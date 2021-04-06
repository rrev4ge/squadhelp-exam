import produce from 'immer'

import ACTION from '../actions/actionTypes';

const initialState = {
  events: [],
  isFetching: false,
  error: null
};

function eventsReducer (state = initialState, action) {
  const { type, events, event, error } = action;
  switch (type) {
    case ACTION.SET_EVENT_REQUEST:
    case ACTION.GET_EVENTS_REQUEST: {
      return produce(state, draftState=>{
        draftState.isFetching = true
      });
    };
    case ACTION.SET_EVENT_SUCCESS: {
      return produce(state, draftState=>{
        draftState.events = [...state.events, event ];
        draftState.isFetching = false;
      });
    };
    case ACTION.GET_EVENTS_SUCCESS: {
      return produce(state, draftState=>{
        draftState.events =  events ? [...events] : [];
        draftState.isFetching = false;
      });
    };
    case ACTION.SET_EVENT_ERROR:
    case ACTION.GET_EVENTS_ERROR: {
      return produce(state, draftState=>{
        draftState.isFetching = false;
        draftState.error = error;
      });
    };
    case ACTION.UPDATE_EVENTS_STORE: {
      return produce(state,draftState=>{
        draftState.events = [...draftState.events];
        draftState.error = null;
      })
    };
    case ACTION.CLEAR_EVENTS_STORE: {
      return produce(state,draftState=>{
        draftState.events = [];
        draftState.error = null;
      })
    };

    default: {
      return state;
    }
  }
}

export default eventsReducer;