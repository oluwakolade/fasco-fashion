import React, { useState } from "react";
import { ButtonOne, ButtonTwo } from "../components/Button";
import {Textfield} from "../components/Textfield";
import { handleGoogleSignIn, handleSignUp } from "../services/authentication";
import { validation } from "../services/validation";
import { useNavigate } from "react-router-dom";
import { SpinnerComponent } from "../components/Spinner";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [validateError, setValidateError] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleCredentials(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name, confirmPassword } = userCredentials;

    const isValid = validation({
      email: email,
      password: password,
      name: name,
      confirmPassword: confirmPassword,
      setValidateError,
      setIsError,
    });

    if (!isValid) return;
    setIsLoading(true);

    try {
      await handleSignUp(e, setError, email, password);
      const user = userCredentials;
      navigate("/home");
      console.log("Sign-up successful!");
      console.log(user);
    } catch (err) {
      console.log("Sign-up error:", err);
    } finally {
      setIsLoading(false);
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
              src="/img/signup.png"
              alt="fashion model"
              className="md:w-[80%] md:h-[90%] h-full object-cover"
            />
          </div>

          {/* right */}

          <div className=" w-full h-full md:w-1/2 p-12 space-y-2 absolute top-0 left-0 md:relative bg-white opacity-90 md:opacity-100">
            <img src="/img/logo.svg" alt="logo" className="w-25 md:w-30" />
            <h2 className="font-volkhov text-xl md:text-2xl text-black my-4">
              Create Account
            </h2>
            <ButtonOne
              text="Sign in with Google"
              icon="/img/google.svg"
              width="w-5"
              onCLick={() => handleGoogleSignIn(setError)}
            />

            <div className="flex items-center justify-center gap-2 my-2 md:my-4">
              <hr className="border-grey-300 w-8 border-t-4" />
              <span className="font-volkhov text-2xl font-normal text-grey-300">
                OR
              </span>
              <hr className="border-grey-300 w-8 border-t-4" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className=" h-2/5 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-4  md:my-4 items-center justify-center ">
                <Textfield
                  inputType="text"
                  inputName="name"
                  label={"User Name"}
                  isError={isError}
                  errorText={validateError.name}
                  onChange={(e) => handleCredentials(e)}
                />
                <Textfield
                  inputType="email"
                  inputName="email"
                  label={"Email"}
                  isError={!!validateError.email}
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
                <Textfield
                  inputType="text"
                  inputName="confirmPassword"
                  label={"Confirm Password"}
                  isError={!!validateError.confirmPassword}
                  errorText={validateError.confirmPassword}
                  onChange={(e) => handleCredentials(e)}
                />
              </div>

              <ButtonTwo
                type="submit"
                text="Create Account"
                className="w-full mb-4"
              />

              <p className="text-black text-sm font-poppins text-center">
                Already have an account?{" "}
                <span  onClick={() => navigate("/login")} className="text-blue-50 cursor-pointer hover:text-blue-900">
                    {" "}
                    Login
                </span>
              </p>

              {error && (
                <p className="text-red-600 text-xs font-poppins ">{error}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default SignUp;
