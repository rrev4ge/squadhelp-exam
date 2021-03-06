import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import getUserReducer from './userReducer';
import dataForContestReducer from './dataForContestReducer';
import payReducer from './payReducer';
import getContestsReducer from './getContestsReducer';
import storeContestReducer from './storeContestReducer';
import bundleReducer from './bundleReducer';
import getContestByIdReducer from './getContestByIdReducer';
import updateContestReducer from './updateContestReducer';
import chatReducer from './chatReducer';
import userProfileReducer from './userProfileReducer';
import eventsReducer from './eventsReducer';
import offerReducer from './offerReduser';



const rootReducer=combineReducers({
   form: formReducer,
   userStore: getUserReducer,
   auth: authReducer,
   dataForContest: dataForContestReducer,
   payment: payReducer,
   contestByIdStore: getContestByIdReducer,
   contestsList: getContestsReducer,
   contestStore: storeContestReducer,
   bundleStore: bundleReducer,
   updateContestStore: updateContestReducer,
   chatStore: chatReducer,
   userProfile: userProfileReducer,
   eventsStore: eventsReducer,
   offersList: offerReducer,
});

export default rootReducer;