import React, { useState } from "react";
import { ButtonOne, ButtonTwo } from "../components/Button";
import {Textfield} from "../components/Textfield";
import {
  handleGoogleSignIn,
  handleSignIn,
  passwordReset,
} from "../services/authentication";
import { loginValidation } from "../services/validation";
import { useNavigate } from "react-router-dom";
import { SpinnerComponent } from "../components/Spinner";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [validateError, setValidateError] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const navigate = useNavigate();

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userCredentials;

    const errors = loginValidation({ email, password });
    setValidateError(errors);
    setIsError(Object.keys(errors).length > 0);

    if (Object.keys(errors).length > 0) return;
    setIsLoading(true);

    try {
      await handleSignIn(e, setError, email, password);
      navigate("/home");
      console.log("Sign-in successful!");
    } catch (err) {
      console.log("Sign-in error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const { email } = userCredentials;
  
    try {
      await passwordReset(email);
      alert("Confirmation code sent to email");
      setResetSent(true); 
    } catch (err) {
      console.error(err);
      alert("Failed to send reset email");
    }
  };
  

  return (
    <section className="sections">
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="flex flex-col md:flex-row justify-evenly md:p-8 ">
          {/* left */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* <img src="/img/signup.svg" alt="fashion model" /> */}
            <img
              src="/img/signin.png"
              alt="fashion model"
              className="md:w-[80%] md:h-[90%] h-full object-cover"
            />
          </div>

          {/* right */}

          {/* {login} */}

          {isForgotPassword ? (
            <ForgotPassword
              handleSubmit={handlePasswordReset}
              isError={isError}
              validateError={validateError}
              handleCredentials={handleCredentials}
              navigate={navigate}
              resetSent={resetSent}
            />
          ) : (
            <div className=" w-full h-full md:w-1/2 p-12 space-y-2 absolute top-0 left-0 md:relative bg-white opacity-90 md:opacity-100">
              <img src="/img/logo.svg" alt="logo" className="w-25 md:w-30" />
              <h2 className="font-volkhov text-xl md:text-2xl text-black my-4 text-center md:text-start">
                Sign in to FASCO
              </h2>
              <ButtonOne
                text="Sign in with Google"
                icon="/img/google.svg"
                width="w-5"
                onCLick={() => handleGoogleSignIn(setError)}
              />

              <div className="flex items-center justify-center gap-2 my-4">
                <hr className="border-grey-300 w-8 border-t-4" />
                <span className="font-volkhov text-2xl font-normal text-grey-300">
                  OR
                </span>
                <hr className="border-grey-300 w-8 border-t-4" />
              </div>

              <form onSubmit={handleSubmit}>
                <Textfield
                  inputType="email"
                  inputName="email"
                  label={"Email"}
                  isError={isError}
                  errorText={validateError.email}
                  onChange={(e) => handleCredentials(e)}
                />
                <Textfield
                  inputType="text"
                  inputName="password"
                  label={"Password"}
                  isError={!!validateError.password}
                  errorText={validateError.password}
                  onChange={(e) => handleCredentials(e)}
                />
                <ButtonTwo
                  type="submit"
                  text="Sign In"
                  className="w-full mb-4"
                />
                {error && (
                  <p className="text-red-600 text-xs font-poppins ">{error}</p>
                )}
              </form>
              <ButtonOne text={"Register"} onClick={() => navigate("/")} />
              <p 
              onClick={() => setIsForgotPassword(true)}
              className="text-blue-50  font-semibold font-poppins text-sm text-end cursor-pointer hover:text-blue-900">
             Forgot Password?
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Login;

const ForgotPassword = ({
  handleSubmit,
  isError,
  validateError,
  handleCredentials,
  navigate,
  resetSent
}) => {
  return (
    <div className=" w-full h-full md:w-1/2 p-12 space-y-2 absolute top-0 left-0 md:relative bg-white">
      <img src="/img/logo.svg" alt="logo" className="w-25 md:w-30 mb-10" />
      <form onSubmit={handleSubmit}>
        <Textfield
          inputType="email"
          inputName="email"
          label={"Email"}
          isError={isError}
          errorText={validateError.email}
          onChange={(e) => handleCredentials(e)}
        />
      <ButtonTwo type="submit" text={resetSent ? "Code Sent" : "Send Confirmation Code"} className="w-full mb-4" />

        <p className="text-black text-sm font-poppins text-center">
          Already have an account?{" "}
          <span className="text-blue-50 cursor-pointer hover:text-blue-900">
            <a href="/login" onClick={() => navigate("/login")}>
              {" "}
              Login
            </a>
          </span>
        </p>
      </form>
    </div>
  );
};
