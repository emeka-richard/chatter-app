import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import style from "./register-forms.module.css";
import RegisterInputs from "./Register-Inputs";
import RegisterSelect from "./Register-select";
import RegisterEmail from "./Register-Email";
import RegisterPassword from "./Register-Password";
import RegisterGoogleBtn from "./Register-Google-Btn";
import RegisterLinkedInBtn from "./Register-LinkedIn-Btn";

// firebase Imports
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestoreDB } from "../../../../firebase/firebase-Config";
import useAuthVerifyUser from "../../../../middlewares/userAuth-Verify-middleware";

const RegisterForm: React.FC = function () {
  const { currentUser } = useAuthVerifyUser();
  const navigate = useNavigate();

  // Define state variables
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userSelectOption, setUserSelectOption] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  // Form submission handler
  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );

      // Update user profile with first name and last name
      const user = userCredential.user;
      if (user) {
        await updateProfile(user, {
          displayName: `${userFirstName} ${userLastName}`,
        });

        // Add additional user data to Firestore
        const userRef = doc(firestoreDB, "users", user.uid);
        await setDoc(userRef, {
          userType: userSelectOption,
        });

        // Send email verification
        await sendEmailVerification(user);
        
        // Redirect to account verification page
        currentUser && navigate("/auth/account-verification");
      }
    } catch (error: unknown) {
        if(error instanceof Error){
            console.error("Error creating user:", error.message);
        }
    }
  };

  return (
    <form 
      className={style.register_form} 
      onSubmit={handleSubmitForm} 
      aria-labelledby="register-heading"
    >
      {/* Register form inputs */}
      <h2 id="register-heading">Create Account</h2>
      <RegisterInputs
        setUserFirstName={setUserFirstName}
        setUserLastName={setUserLastName}
      />
      <RegisterSelect setUserSelectOption={setUserSelectOption} />
      <RegisterEmail setUserEmail={setUserEmail} />
      <RegisterPassword setUserPassword={setUserPassword} />
      
      {/* Submit button */}
      <button 
        className={style.register_form_btn} 
        type="submit" 
        aria-label="Create Account"
      >
        Create account
      </button>
      
      {/* Social media registration buttons */}
      <RegisterGoogleBtn />
      <RegisterLinkedInBtn />
    </form>
  );
};

export default RegisterForm;
