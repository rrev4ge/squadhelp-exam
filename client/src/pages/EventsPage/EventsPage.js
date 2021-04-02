import React from 'react';
import CONSTANTS from '../../constants';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './EventsPage.module.sass';
import EventsContainer from '../../components/EventsContainer/EventsContainer';


const EventsPage = (props) => {

    const {role, history} = props;

    if (role !== CONSTANTS.CUSTOMER) {
        history.replace('/');
    }

    const eventsClasses = {
      eventsContainer: styles.eventsContainer,
      formContainer: styles.formContainer,
      listContainer: styles.listContainer,
    };

    return (
        <div className={styles.container}>
            <Header/>
            <EventsContainer classes={eventsClasses}/>
            <Footer/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state.userStore.data
};

export default connect(mapStateToProps)(EventsPage);
