import React, { useState, ChangeEvent } from 'react';
import style from "./login.module.css";

const LoginEmail: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");

  // Function to handle changes in the email input
  const handleEmailSetting = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  return (
    <div className={style.login_email_wrapper}>
      {/* Email address label with aria attributes */}
      <label
        className={style.login_email_label}
        htmlFor="emailInput"
        aria-label="Email address"
      >
        Email address
      </label>

      {/* Email input field */}
      <input
        id="emailInput"
        name='email'
        type='email'
        placeholder='example@yahoo.com'
        className={style.login_email_input}
        value={emailValue}
        onChange={handleEmailSetting}
        // Accessibility attributes
        aria-required="true"
      />
    </div>
  );
};

export default LoginEmail;
