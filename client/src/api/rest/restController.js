import http from '../interceptor';

// User Api
export const registerRequest = (data) => http.post('/users/registration', data);
export const loginRequest = (data) => http.post('/users/login', data);
export const getUser = () => http.post('/users/getUser');
export const updateUser = (data) => http.post('/users/updateUser', data);
export const changeMark = (data) => http.post('/users/changeMark', data);
export const payMent = (data) => http.post('/users/pay', data.formData);
export const cashOut = (data) => http.post('/users/cashout', data);

export const updateContest = data => http.post('updateContest', data);
export const setNewOffer = data => http.post('setNewOffer', data);
export const setOfferStatus = data => http.post('setOfferStatus', data);
export const downloadContestFile = (data) => http.get('downloadFile/' + data.fileName);
export const getCustomersContests = (data) => {
    return http.post('getCustomersContests', {limit: data.limit, offset: data.offset}, {
        headers: {
            status: data.contestStatus
        }
    });
};

export const getActiveContests = ({offset, limit, typeIndex, contestId, industry, awardSort, ownEntries}) => {
    return http.post('getAllContests', {offset, limit, typeIndex, contestId, industry, awardSort, ownEntries})
};

export const getContestById = (data) => {
    return http.get('getContestById', {
        headers: {
            contestId: data.contestId
        }
    });
};

export const dataForContest = (data) => http.post('dataForContest', data);


export const getPreviewChat = () => http.post('getPreview');
export const getDialog = (data) => http.post('getChat', data);
export const newMessage = (data) => http.post('newMessage', data);
export const changeChatFavorite = (data) => http.post('favorite', data);
export const changeChatBlock = (data) => http.post('blackList', data);
export const getCatalogList = (data) => http.post('getCatalogs', data);
export const addChatToCatalog = (data) => http.post('addNewChatToCatalog', data);
export const createCatalog = (data) => http.post('createCatalog', data);
export const deleteCatalog = (data) => http.post('deleteCatalog', data);
export const removeChatFromCatalog = (data) => http.post('removeChatFromCatalog', data);
export const changeCatalogName = (data) => http.post('updateNameCatalog', data);












