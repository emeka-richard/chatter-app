import React from 'react';
import AuthAccountVerifyBackBtn from './Auth-acct-verify-back-btn';
import style from './auth-account-verify.module.css';
import AuthCodeBox from './Auth-code-box';

const AuthAccountVerification: React.FC = function () {
  return (
    <section className={style.auth_acct_verify_wrapper}>
      {/* Back button component */}
      <AuthAccountVerifyBackBtn />
      <div className={style.auth_acct_verify_container}>
        {/* Authentication code input box */}
        <AuthCodeBox />
      </div>
    </section>
  );
};

export default AuthAccountVerification;
