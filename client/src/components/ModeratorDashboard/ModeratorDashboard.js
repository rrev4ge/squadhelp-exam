import React, { useEffect } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';

import { setOfferStatus, clearSetOfferStatusError,} from './../../actions/actionCreator';
import { getOffersAction, clearOffersList, moderateOfferAction } from './../../actions/offerActionCreator';
import CONSTANTS from '../../constants';
import ContestsContainer from '../ContestsContainer/ContestsContainer';
import ModeratorOfferBox from "../ModeratorOfferBox/ModeratorOfferBox";
import styles from './ModeratorDashboard.module.sass';
import TryAgain from '../TryAgain/TryAgain';
import Error from "../../components/Error/Error";


const ModeratorDashboard = (props) => {

    const {offers, error, haveMore, isFetching} = useSelector(state => state.offersList)

    const dispatch = useDispatch();
    const getOffers = bindActionCreators(getOffersAction, dispatch);
    const clearOffers = bindActionCreators(clearOffersList, dispatch);
    const setOfferStatus = bindActionCreators(moderateOfferAction, dispatch);
    const clearSetStatusError = bindActionCreators(clearSetOfferStatusError, dispatch);
    
    const loadMore = (startFrom) => {
            getOffers({
                limit: 8,
                offset: startFrom,
                offerStatus: CONSTANTS.OFFER_STATUS_CHECKING})
    }

    const tryToGetOffers = () => {
        clearOffers();
        getOffers({limit: 8, offerStatus: CONSTANTS.OFFER_STATUS_CHECKING});
    };

    const setStatus = (id, offerStatus) => {
        clearSetStatusError();
        const obj = {
            id,
            offerStatus,
        };
        setOfferStatus(obj);
    };

    const setOffersList = () => {
        const array = [];
        for (let i = 0; i < offers.length; i++) {
            array.push(<ModeratorOfferBox data={offers[i]} key={offers[i].id}
                                                setOfferStatus={setStatus}
                                                date={new Date()}
                    />)
        }
        return array;
    };

    useEffect(() => {
        getOffers({limit: 8, offerStatus: CONSTANTS.OFFER_STATUS_CHECKING});
        return () => {
            clearOffers();
        }
    }, [])

    return (
        <div className={styles.mainContainer}>
                {
                    error ?
                        <TryAgain getData={tryToGetOffers}/>
                        :
                        <ContestsContainer isFetching={isFetching}
                                            loadMore={loadMore}
                                            history={props.history} haveMore={haveMore}>
                            {setOffersList()}
                        </ContestsContainer>
                }
        </div>
    )
}

export default ModeratorDashboard;

