import produce from 'immer'

import ACTION from '../actions/actionTypes';
import CONSTANTS from '../constants';

const initialState = {
  offers: [],
  isFetching: false,
  error: null,
  haveMore: true
};

function offerReducer (state = initialState, action) {
  const { type, error } = action;
  switch (type) {
    case ACTION.MODERATE_OFFER_REQUEST,
      ACTION.GET_OFFERS_REQUEST: {
      return produce(state, draftState=>{
        draftState.isFetching = true;
      });
    };
    case ACTION.GET_OFFERS_SUCCESS: {
      return produce(state, draftState=>{
        draftState.offers =  [...draftState.offers, ...action.data.offers];
        draftState.isFetching = false;
        draftState.haveMore = action.data.haveMore;
      });
    };
    case ACTION.MODERATE_OFFER_SUCCESS: {
      return produce(state, draftState=>{
        draftState.offers =  draftState.offers.map(o =>
          o.id === action.data.id ? { ...o, ...action.data } : o
        ).filter(o => o.status === CONSTANTS.OFFER_STATUS_CHECKING);
        draftState.isFetching = false;
        draftState.haveMore = action.data.haveMore;
      });
    };
    case ACTION.MODERATE_OFFER_ERROR,
      ACTION.GET_OFFERS_ERROR: {
      return produce(state, draftState=>{
        draftState.isFetching = false;
        draftState.error = error;
      });
    };
    case ACTION.CLEAR_OFFERS_LIST: {
      return produce(state, draftState=>{
        draftState.offers = [];
        draftState.isFetching = false;
        draftState.error = null;
        draftState.haveMore = true;
      });
    };
    default: {
      return state;
    }
  }
}

export default offerReducer;