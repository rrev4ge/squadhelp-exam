import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment'
import * as eventsActionCreator from '../../../actions/eventsActionCreator';
import styles from './EventsForm.module.sass';
import FormInput from './../../FormInput/FormInput';
import customValidator from '../../../validators/validator';
import Schems from '../../../validators/validationSchems';

const EventsForm = (props) => {

    const {submitting, handleSubmit, classes} = props;

    const dispatch = useDispatch();
    const { setEventAction } = bindActionCreators(eventsActionCreator,dispatch)

    const userData = useSelector(state => state.userStore.data);

    const clicked = (values) => {
        setEventAction(
            userData.id,
            {
                eventName: values.eventName,
                estimatedTime: moment(values.estimatedTime).format('YYYY-MM-DDTHH:mm'),
                alertTime: moment(values.alertTime).format('YYYY-MM-DDTHH:mm'),
                startTime: moment().format('YYYY-MM-DDTHH:mm'),
            }
        );
    };


    const formInputClasses = {
        input: styles.input,
        warning: styles.fieldWarning,
        notValid: styles.notValid,
        error: styles.error,
        valid: styles.valid,
    };

    return (
        <div>
            <form onSubmit={handleSubmit(clicked)} className={classes}>
                <Field
                    name='eventName'
                    classes={ formInputClasses }
                    component={ FormInput }
                    type='text'
                    label='Event'
                />
                <Field
                    name='estimatedTime'
                    classes={ formInputClasses }
                    component={ FormInput }
                    type='datetime-local'
                    label='Estimated date & time'
                />
                <Field
                    name='alertTime'
                    classes={ formInputClasses }
                    component={ FormInput }
                    type='datetime-local'
                    label='Alert time'
                />
                <button type='submit' disabled = {submitting}
                        className={ styles.input }
                    >
                    <span>Start Timer</span>
                </button>
            </form>
        </div>
    );
}


export default reduxForm({
  form: 'events',
  validate: customValidator(Schems.EventsSchema),
})(EventsForm)
