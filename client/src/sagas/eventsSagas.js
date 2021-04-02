import { put } from 'redux-saga/effects'
import { getEventsError, getEventsRequest, getEventsSuccess, setEventError, setEventRequest, setEventSuccess } from '../actions/eventsActionCreator';
import { getEvents, setEvent } from '../api/rest/restController';

export function* setEventSaga(data) {
    yield put(setEventRequest());
    try {
        const event = yield setEvent(data);
        yield put(setEventSuccess(event));
    } catch (error) {
        yield put(setEventError(error));
    } 
}

export function* getEventsSagas(data) {
    yield put(getEventsRequest());
    try {
        const events = yield getEvents(data);
        yield put(getEventsSuccess(events));
    } catch (error) {
        yield put(getEventsError(error));
    }
}