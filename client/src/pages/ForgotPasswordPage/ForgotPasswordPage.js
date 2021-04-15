import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';
import Logo from '../../components/Logo';
import { bindActionCreators } from 'redux';

import styles from './ForgotPasswordPage.module.sass';

const ForgotPasswordPage = (props) => {

  const dispatch = useDispatch();
  const clearError = bindActionCreators(clearErrorSignUpAndLogin,dispatch);

  const changeRoute = () => {
    props.history.replace('/');
  };

  return (
    <div className={ styles.mainContainer }>
      <div className={ styles.forgotPassContainer }>
        <div className={ styles.headerPage }>
          <Logo src={ `${ CONSTANTS.STATIC_IMAGES_PATH }logo.png` } alt="logo"/>
          <div>
            <div className={ styles.linkContainer }>
              <Link to='/login'
                  style={ {textDecoration: 'none'} }><span>Login</span></Link>
            </div>
            <div className={ styles.linkContainer }>
              <Link to='/registration'
                  style={ {textDecoration: 'none'} }><span>Signup</span></Link>
            </div>
          </div>
          
        </div>
        <div className={ styles.forgotPasswordFormContainer }>
          <ForgotPasswordForm history={props.history} changeRoute={ changeRoute }/>
        </div>
      </div>
    </div>
  );

};

export default ForgotPasswordPage;