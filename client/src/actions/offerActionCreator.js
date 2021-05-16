import ACTION from './actionTypes';

export const getOffersAction=(data)=>{
    return{
        type: ACTION.GET_OFFERS_ACTION,
        data: data
    }
};

export const getOffersRequest=()=>{
    return{
        type: ACTION.GET_OFFERS_REQUEST,
    }
};

export const getOffersSuccess=(data)=>{
    return{
        type: ACTION.GET_OFFERS_SUCCESS,
        data: data
    }
};

export const getOffersError=(error)=>{
    return{
        type: ACTION.GET_OFFERS_ERROR,
        error
    }
};

export const clearOffersList = () => {
    return {
        type: ACTION.CLEAR_OFFERS_LIST
    }
};

export const moderateOfferAction=(data)=>{
    return{
        type: ACTION.MODERATE_OFFER_ACTION,
        data: data
    }
};

export const moderateOfferRequest=()=>{
    return{
        type: ACTION.MODERATE_OFFER_REQUEST,
    }
};

export const moderateOfferSuccess=(data)=>{
    return{
        type: ACTION.MODERATE_OFFER_SUCCESS,
        data: data
    }
};

export const moderateOfferError=(error)=>{
    return{
        type: ACTION.MODERATE_OFFER_ERROR,
        error
    }
};