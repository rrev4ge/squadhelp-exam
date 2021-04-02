import React from 'react';
import EventsForm from './EventsForm/EventsForm';
import EventsList from './EventsList/EventsList';

const EventsContainer = (props) => {

    const {classes} = props
    
    return (
        <div className={classes.eventsContainer}>
            <EventsForm classes={classes.formContainer}/>
            <EventsList classes={classes.listContainer}/>
        </div>
    );
}

export default EventsContainer;