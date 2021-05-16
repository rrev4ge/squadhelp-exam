import React from 'react';
import styles from './ModeratorOfferBox.module.sass';
import CONSTANTS from '../../constants';
import {connect} from 'react-redux';
import Rating from 'react-rating';
import {
    changeMark,
    clearChangeMarkError,
    goToExpandedDialog,
    changeShowImage,
} from '../../actions/actionCreator';
import {withRouter} from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './confirmStyle.css';


const ModeratorOfferBox = (props) => {

    const findConversationInfo = () => {
        const {messagesPreview, id} = props;
        const participants = [id, props.data.User.id];
        participants.sort((participant1, participant2) => participant1 - participant2);
        for (let i = 0; i < messagesPreview.length; i++) {
            if (isEqual(participants, messagesPreview[i].participants)) {
                return {
                    participants: messagesPreview[i].participants,
                    _id: messagesPreview[i]._id,
                    blackList: messagesPreview[i].blackList,
                    favoriteList: messagesPreview[i].favoriteList
                };
            }
        }
        return null;
    };


    const resolveOffer = () => {
        console.log(props.data.id);
        confirmAlert({
            title: 'confirm',
            message: 'Are u sure?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.setOfferStatus(props.data.id, 'pending')
                },
                {
                    label: 'No',
                }
            ]
        });
    };

    const rejectOffer = () => {
        confirmAlert({
            title: 'confirm',
            message: 'Are u sure?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.setOfferStatus(props.data.id, 'locked')
                },
                {
                    label: 'No',
                }
            ]
        });
    };

    const offerStatus = () => {
        const {status} = props.data;
        if (status === CONSTANTS.OFFER_STATUS_LOCKED) {
            return <i className={classNames("fas fa-times-circle reject", styles.reject)}/>
        } else if (status === CONSTANTS.OFFER_STATUS_PENDING) {
            return <i className={classNames("fas fa-check-circle resolve", styles.resolve)}/>
        }
        return null;
    };


    const goChat = () => {
        props.goToExpandedDialog({interlocutor: props.data.User, conversationData: findConversationInfo()});
    };


    const {data, role, id, contestType} = props;
    const {avatar, firstName, lastName, email, rating} = props.data.User;
    return (
        <div className={styles.offerContainer}>
            <div className={styles.mainInfoContainer}>
                <div className={styles.userInfo}>
                    <div className={styles.creativeInfoContainer}>
                        <img
                            src={avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${avatar}`}
                            alt='user'/>
                        <div className={styles.nameAndEmail}>
                            <span>{firstName + ' ' + lastName}</span>
                            <span>{email}</span>
                        </div>
                    </div>
                    <div className={styles.creativeRating}>
                        <span className={styles.userScoreLabel}>Creative Rating </span>
                        <Rating
                            initialRating={rating}
                            fractions={2}
                            fullSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt='star'/>}
                            placeholderSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt='star'/>}
                            emptySymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star-outline.png`}
                                              alt='star-outline'/>}
                            readonly={true}
                        />
                    </div>
                </div>
                <div className={styles.responseConainer}>
                    {
                        contestType === CONSTANTS.LOGO_CONTEST ?
                            <img onClick={() => props.changeShowImage({imagePath: data.fileName, isShowOnFull: true})}
                                 className={styles.responseLogo}
                                 src={`${CONSTANTS.publicURL}${data.fileName}`} alt='logo'/>
                            :
                            <span className={styles.response}>{data.text}</span>
                    }
                </div>
                {role !== CONSTANTS.CREATOR && <i onClick={goChat} className="fas fa-comments"/>}
            </div>
            <div className={styles.btnsContainer}>
                <div onClick={resolveOffer} className={styles.resolveBtn}>Approve</div>
                <div onClick={rejectOffer} className={styles.rejectBtn}>Block</div>
            </div>
        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        changeMark: (data) => dispatch(changeMark(data)),
        clearError: () => dispatch(clearChangeMarkError()),
        goToExpandedDialog: (data) => dispatch(goToExpandedDialog(data)),
        changeShowImage: (data) => dispatch(changeShowImage(data))
    }
};

const mapStateToProps = (state) => {
    const {changeMarkError, isShowModal} = state.contestByIdStore;
    const {id, role} = state.userStore.data;
    const {messagesPreview} = state.chatStore;
    return {changeMarkError, id, role, messagesPreview, isShowModal};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModeratorOfferBox));