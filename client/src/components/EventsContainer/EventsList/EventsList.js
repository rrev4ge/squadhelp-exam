import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import SpinnerLoader from './../../Spinner/Spinner';
import EventsListItem from './EventsListItem/EventsListItem';
import * as eventsActionCreator from '../../../actions/eventsActionCreator'
import _ from 'lodash';
import moment from 'moment';


const EventsList = (props) => {

    const {classes} = props
    
    const {events, isFetching, error} = useSelector(state => state.eventsStore);
    const {data:{id}} = useSelector(state => state.userStore);
    const dispatch = useDispatch();
    const {getEventsAction} = bindActionCreators(eventsActionCreator, dispatch);

    useEffect(() => {
        getEventsAction(id)
    }, [])

    const isEmpty = _.isEmpty(events)

    function sortDates(a, b) {
        const dateNow = moment();
        const dateA = moment(a.estimatedTime);
        const dateB = moment(b.estimatedTime);
        return dateNow - dateA || dateB - dateA;  

    }

    const renderList = [...events].sort(sortDates).map((e, i) => (
                    <EventsListItem 
                        key={i} 
                        eventName={e.eventName}
                        estimatedTime={e.estimatedTime}
                        startTime={e.startTime} 
                        alertTime={e.alertTime}
                    />
                ))

    return (
        <>
            {
            !isEmpty 
            ?
            <ul className={classes}>
                {renderList}
            </ul>
            :
            <div>You has no events.</div>
            }
            {isFetching && <SpinnerLoader />}
            {error && <div>ERROR</div>}
        </>
    );
}

export default EventsList;
