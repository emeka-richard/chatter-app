import React from 'react';
import style from './login.module.css';
import LoginEmail from './Login-Email';
import LoginPassword from './Login-Password';

const LoginForm: React.FC = function () {
  return (
    <form className={style.login_form}>
      <LoginEmail />
      <LoginPassword />
      <button className={style.login_form_btn} type="submit">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
