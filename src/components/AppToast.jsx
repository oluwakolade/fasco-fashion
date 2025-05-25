import { Toast, ToastToggle } from "flowbite-react";

const AppToast = ({ message }) => {
  return (
    <Toast>
      <div className="ml-4 text-sm font-poppins font-normal">{message}</div>
      <ToastToggle />
    </Toast>
  );
};

export default AppToast;
