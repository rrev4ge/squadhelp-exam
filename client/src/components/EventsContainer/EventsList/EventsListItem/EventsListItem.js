import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './EventsListItem.module.sass'

const EventsListItem = (props) => {
    
    const {setIsRender, eventName, estimatedTime, alertTime, startTime, classes} = props;

    const [currentTime, setCurrentTime] = useState({
        current: progress(startTime, moment(), estimatedTime),
        alert: progress(startTime, alertTime, estimatedTime),
    });

    useEffect(() => {
        if (currentTime.current === 0) {
            setIsRender(true)
        }
        if (currentTime.current >= 0) {
            const intervalId = setInterval( () => {
                setCurrentTime(currentTime => ({
                    ...currentTime,
                    current: progress(startTime, moment(), estimatedTime),
                }));
                }, 1000)
            return () => clearInterval(intervalId)
        }
    }, [currentTime]);

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

    function parseTimer (start, end) {
        const duration = timeStamp(start, end);

        const d = Math.floor(duration / (3600 * 24));
        const h = Math.floor(duration / 3600 % 24);
        const m = Math.floor(duration / 60 % 60);
        const s = Math.floor(duration % 60);

        const dRender = d > 0 ? d + "d " : "";
        const hRender = h > 0 ? h + "h " : "";
        const mRender = m > 0 ? m + "m " : "";
        const sRender = s > 0 ? s + "s" : "";
        return duration > 0 ? dRender+hRender+mRender+sRender : 'timerOut';
    }

    const {current, alert} = currentTime;


    return (
        <>
            {current >= 0 
            ?
            <div className={classes}>
                <div className={styles.container}>
                    <div className={styles.progress} style={
                        {
                            backgroundColor: moment(estimatedTime) > moment()
                            ? current > alert 
                                ? '#d1e9cf'
                                : '#e69fb8'
                            : '#e9ecef' ,
                            width: `${current}%`
                        }
                    } />
                    <div className={styles.progressData}>
                        <div>{eventName}</div>
                        <div>{parseTimer(moment(),estimatedTime)}</div>
                    </div>
                </div>
            </div>
            :
            null
            }
        </>
    );
}

export default EventsListItem;
