import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";
import { googleProvider } from "../config/firebase";

const GoogleAuth = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button className="flex" onClick={signInWithGoogle}>
      <FcGoogle
        size={25}
        style={{
          marginRight: "10px",
        }}
      />
      Sign in with google
    </button>
  );
};

export default GoogleAuth;
