import http from '../interceptor';
import { loadState, saveState } from './../localStorage';

// User Api
export const registerRequest = (data) => http.post('/users/registration', data);
export const loginRequest = (data) => http.post('/users/login', data);
export const getUser = () => http.get('/users/');
export const updateUser = (data) => http.patch('/users/update', data);
export const changeMark = (data) => http.post('/users/changeMark', data);
export const payMent = (data) => http.post('/users/pay', data.formData);
export const cashOut = (data) => http.post('/users/cashout', data);

//Contest Api
export const dataForContest = (data) => http.post('/contests/dataForContest', data);
export const updateContest = data => http.patch('/contests/update', data);
export const setNewOffer = data => http.post('/contests/createOffer', data);
export const setOfferStatus = data => http.patch('/contests/setOfferStatus', data);
export const downloadContestFile = (data) => http.get('/contests/file/' + data.fileName);
export const getCustomersContests = ({offset, limit, contestStatus}) => http.get(`/contests/customer?offset=${offset}&limit=${limit}&contestStatus=${contestStatus}`);
export const getActiveContests = ({offset, limit, typeIndex, contestId, industry, awardSort, ownEntries}) => http.get(`/contests?offset=${offset}&limit=${limit}&typeIndex=${typeIndex}&contestId=${contestId}&industry=${industry}&awardSort=${awardSort}&ownEntries=${ownEntries}`);
export const getContestById = ({contestId}) => http.get(`/contests/${contestId}`);



// Chat Api
export const getPreviewChat = () => http.get('/chat/preview');
export const getDialog = ({ interlocutorId }) => http.get(`/chat/dialog?interlocutorId=${interlocutorId}`);
export const newMessage = (data) => http.post('/chat/messages', data);
export const changeChatFavorite = (data) => http.post('/chat/favorites', data);
export const changeChatBlock = (data) => http.post('/chat/blackList', data);

export const createCatalog = (data) => http.post('/chat/catalogs', data);
export const getCatalogList = () => http.get('/chat/catalogs');
export const deleteCatalog = ({catalogId}) => http.delete(`/chat/catalogs?catalogId=${catalogId}`);
export const changeCatalogName = (data) => http.patch('/chat/catalogs', data);
export const addChatToCatalog = (data) => http.post('/chat/catalogs/dialogs', data);
export const removeChatFromCatalog = ({catalogId, chatId}) => http.delete(`/chat/catalogs/dialogs?catalogId=${catalogId}&chatId=${chatId}`);

// Events Api
export const setEvent = (data) => saveState(data);
export const getEvents = (data) => loadState(data);


