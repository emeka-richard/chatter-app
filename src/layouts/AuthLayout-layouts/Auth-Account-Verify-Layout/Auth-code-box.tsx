import React from "react";
import VerificationCodeInput from "./Auth-verify-input";
import style from "./auth-account-verify.module.css";

const AuthCodeBox: React.FC = () => {
  // Function to handle submission of verification code
  const handleSubmit = (code: string) => {
    console.log("Verification code submitted:", code);
    // Handle submission logic here (e.g., sending the code to server for verification)
  };

  return (
    <section className={style.auth_code_box_wrapper}>
      {/* Container for texts */}
      <div className={style.auth_code_box_texts_container}>
        <h2 className={style.auth_code_box_texts_h2}>
          Enter confirmation code
        </h2>
        <p className={style.auth_code_box_texts_p}>
          We emailed you a code. Please input the code here for account
          verification
        </p>
      </div>
      {/* Component for entering verification code */}
      <VerificationCodeInput codeLength={4} onSubmit={handleSubmit} />
    </section>
  );
};

export default AuthCodeBox;
