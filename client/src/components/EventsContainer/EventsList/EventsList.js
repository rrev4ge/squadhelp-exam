import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import SpinnerLoader from './../../Spinner/Spinner';
import styles from './EventsList.module.sass'
import EventsListItem from './EventsListItem/EventsListItem';
import * as eventsActionCreator from '../../../actions/eventsActionCreator'
import _ from 'lodash';
import moment from 'moment';


const EventsList = (props) => {

    const {classes} = props

    const [isRender, setIsRender] = useState(false);
    const {events, isFetching, error} = useSelector(state => state.eventsStore);
    const {data:{id}} = useSelector(state => state.userStore);
    const dispatch = useDispatch();
    const {getEventsAction, updateEventsStore} = bindActionCreators(eventsActionCreator, dispatch);

    useEffect(() => {
        getEventsAction(id);
    }, [])


    const handleEvent = (bool) => {
        setIsRender(isRender => bool ? isRender=true : !isRender);
        getEventsAction(id);
        updateEventsStore();
    };

    function sortDates(a, b) {
            const dateA = moment(a.estimatedTime);
            const dateB = moment(b.estimatedTime);
            return dateA - dateB;
    }

    const RenderList = events.filter(e => moment(e['estimatedTime']) > moment()).sort(sortDates).map((e, i) => (
                    <EventsListItem 
                        key={i} 
                        eventName={e.eventName}
                        estimatedTime={e.estimatedTime}
                        startTime={e.startTime} 
                        alertTime={e.alertTime}
                        setIsRender={handleEvent}
                    />
                ))

    const isEmpty = _.isEmpty(RenderList)

    return (
        <div className={classes}>
            <div className={styles.listHeader}>
                <div>Live upcoming checks</div>
                {
                    isRender 
                    ?
                        <div className={styles.alert} onClick={()=>setIsRender(isRender => !isRender)}>
                            {`${RenderList.length - 1} events left`}
                        </div>
                    : 
                        <div></div>
                }
                <div>Time remaining <i className={'far fa-clock'}></i></div>    
            </div>
            {
            !isEmpty 
            ?
            <div className={styles.list}>
                {RenderList}
            </div>
            :
            <div>You has no events.</div>
            }
            {isFetching && <SpinnerLoader />}
            {error && <div>ERROR</div>}
        </div>
    );
}

export default EventsList;
