import { useState } from "react";

import { AiFillGoogleCircle, AiOutlineMail } from "react-icons/ai";
import EmailAndPassword from "../components/EmailAndPassword";
import GoogleAuth from "../components/GoogleAuth";
import LogOut from "../components/LogOut";
import UserDetails from "../components/UserDetails";

function App() {
  const [methord, setMethord] = useState("");

  const signInElement = (signInType: String) => {
    switch (signInType) {
      case "email":
        setMethord("email");
        break;
      case "google":
        setMethord("google");
        break;
    }
  };

  return (
    <>
      <h1>Firebase Auth</h1>
      <UserDetails />
      <fieldset>
        <legend>Select sign in methord</legend>
        <AiFillGoogleCircle
          className="icon"
          size={50}
          onClick={() => signInElement("google")}
        />
        <AiOutlineMail
          className="icon"
          size={50}
          onClick={() => signInElement("email")}
        />
        <EmailAndPassword classProp={methord == "email" ? "" : "displayNone"} />
        <GoogleAuth classProp={methord == "google" ? "" : "displayNone"} />
      </fieldset>
      <LogOut />
    </>
  );
}

export default App;
