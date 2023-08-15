import { ReactNode, useState } from "react";
import EmailAndPassword from "./components/EmailAndPassword";
import { AiFillGoogleCircle, AiOutlineMail } from "react-icons/ai";
import GoogleAuth from "./components/GoogleAuth";
import LogOut from "./components/LogOut";
import UserDetails from "./components/UserDetails";

function App() {
  const [methord, setMethord] = useState("");

  const signInElement = (): ReactNode => {
    switch (methord) {
      case "email":
        return <EmailAndPassword />;
      case "google":
        return <GoogleAuth />;
    }
  };

  return (
    <>
      <h1>Firebase Note</h1>
      <UserDetails />
      <fieldset>
        <legend>Select sign in methord</legend>
        <AiFillGoogleCircle
          className="icon"
          size={50}
          onClick={() => setMethord("google")}
        />
        <AiOutlineMail
          className="icon"
          size={50}
          onClick={() => setMethord("email")}
        />
        {signInElement()}
      </fieldset>
      <LogOut />
    </>
  );
}

export default App;
