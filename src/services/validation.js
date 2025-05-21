export const validation = ({ email, password, name, confirmPassword, setValidateError, setIsError }) => {
    const errors = {};
  
    if (!name) {
      errors.name = "Name is required";
    }
  
    if (!email) {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        errors.email = "Invalid email format";
      }
    }
  
    if (!password) {
      errors.password = "Password is required";
    }
  
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm your password";
    } else if (password && confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }
  
    if (Object.keys(errors).length > 0) {
      setValidateError(errors); // store the object
      setIsError(true);
      return false;
    }
  
    setValidateError({});
    setIsError(false);
    return true;
  };






  export  const loginValidation = ({ email, password }) => {
    const errors = {};
  
    if (!email) {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        errors.email = "Invalid email format";
      }
    }
  
    if (!password) {
      errors.password = "Password is required";
    }
  
    return errors;
  };
  
  
