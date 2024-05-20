import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import OfferJobForm from "./components/OfferJobForm";
import PostulationForm from "./components/PostulationForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <LoginForm />
      <RegistrationForm />
      <OfferJobForm />
      <PostulationForm />
      <ToastContainer />
    </>
  );
};

export default App;
