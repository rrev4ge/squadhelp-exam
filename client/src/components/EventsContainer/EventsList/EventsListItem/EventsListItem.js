import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'

const EventsListItem = (props) => {
    
    const {eventName, estimatedTime, alertTime, startTime} = props;

    const [currentTime, setCurrentTime] = useState({
        current: progress(startTime, moment(), estimatedTime),
        alert: progress(startTime, alertTime, estimatedTime),
    });

    useEffect(() => {

        if (currentTime.current >= 0) {
            const intervalId = setInterval( () => {
                setCurrentTime(currentTime => ({
                    ...currentTime,
                    current: progress(startTime, moment(), estimatedTime),
                }))}, 1000)
        
            return () => clearInterval(intervalId)
        }
        
 
    }, [currentTime.current]);

    function timeStamp (start, end) {
        const stamp = moment(end).format('YYYY-MM-DDTHH:mm');
        const difference = moment(moment(stamp).diff(start)).unix();
        return difference;
    }

    function progress (start, current, end) {
        const min = timeStamp(current, end);
        const max = timeStamp(start, end);
        const result = (Math.round((min / max) * 100));
        return result;
    }

    const {current, alert} = currentTime;

    return (
        <li>
                <ProgressBar variant={
                    moment(estimatedTime) > moment()
                    ? current > alert 
                        ? 'info' 
                        : 'danger'
                    : 'success'
                    } 
                    now={moment(estimatedTime) > moment() ? current : 100} 
                    label={`|||${current}|||${alert}|||${estimatedTime}|||${eventName}`} 
                />
        </li>
    );
}

export default EventsListItem;
