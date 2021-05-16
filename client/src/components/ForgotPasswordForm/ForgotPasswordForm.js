import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActionForgotPass, authActionForgotPassToken, clearAuth } from '../../actions/actionCreator';
import { Redirect } from 'react-router-dom';
import styles from './ForgotPasswordForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import Error from '../../components/Error/Error';



const ForgotPasswordForm = (props) => {

  const {handleSubmit, submitting, history} = props;
  const {error, isFetching, isSend} = useSelector(state => state.auth)

  const dispatch = useDispatch();
  const tokenRequest = bindActionCreators(authActionForgotPassToken,dispatch);
  const passwordRequest = bindActionCreators(authActionForgotPass,dispatch);
  const authClear = bindActionCreators(clearAuth,dispatch);

  useLayoutEffect(() => {
    return () => {
      authClear();  
    };
  }, [])

  const sendToken = (values) => {
    const {email, newPassword} = values;
    values = {email, password: newPassword, url: window.location.href}
    tokenRequest(values);
  };

  const changePassword = () => {
    const values = {token: window.location.pathname.replace( /^\/.*\//, '')};
    passwordRequest(values);
  };
  
  const formInputClasses = {
    container: styles.inputContainer,
    input: styles.input,
    warning: styles.fieldWarning,
    notValid: styles.notValid,
    valid: styles.valid,
  };

  return (
    <div className={ styles.forgotPasswordForm }>
      { error && <Error data={ error.data } status={ error.status }
                        clearError={ authClear }/> }
      <h2>FORGOT YOUR PASSWORD</h2>
      {history.location.pathname === '/forgotPassword' 
      ?
        isSend
        ?
        <div>
          <h3 className={ styles.info }>An email was sent to the address with a link to confirm the password change, you need to follow this link and confirm the password change.</h3>
          <div>
            <button onClick={()=>history.replace('/')} className={ styles.submitContainer }>
              <span className={ styles.send }>Return on main page</span>
            </button>
          </div>
        </div>
        :
        <form onSubmit={ handleSubmit(sendToken) }>
          <Field
            name='email'
            classes={ formInputClasses }
            component={ FormInput }
            type='text'
            label='Email Address'
          />
          <Field
            name='newPassword'
            classes={ formInputClasses }
            component={ FormInput }
            type='password'
            label='New Password'
          />
          <Field
            name='confirmPassword'
            classes={ formInputClasses }
            component={ FormInput }
            type='password'
            label='Confirm Password'
          />
          <button type='submit' disabled={ submitting }
                  className={ styles.submitContainer }>
            <span className={ styles.inscription }>{ isFetching
              ? 'Submitting...'
              : 'FORGOT PASSWORD' }</span>
          </button>
        </form> 
      :
        <form onSubmit={ handleSubmit(changePassword) }>
          <button type='submit' disabled={ submitting }
                  className={ styles.submitContainer }>
            <span className={ styles.send }>{ isFetching
              ? 'Submitting...'
              : 'CHANGE YOUR PASSWORD' }</span>
          </button>
        </form> 
      }
    </div>
  );
}

export default reduxForm({
  form: 'forgotPassword',
  validate: customValidator(Schems.ForgotPasswordSchem),
})(ForgotPasswordForm);