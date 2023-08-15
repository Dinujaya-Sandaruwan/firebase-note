import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const LogOut = () => {
  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }

    window.location.reload();
  };
  return <button onClick={handleLogOut}>Sign out</button>;
};

export default LogOut;
