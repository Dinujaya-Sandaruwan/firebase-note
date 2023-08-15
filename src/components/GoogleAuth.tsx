import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";
import { googleProvider } from "../config/firebase";
import { useNavigate } from "react-router-dom";

interface Props {
  classProp: string;
}

const GoogleAuth = ({ classProp }: Props) => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }

    navigate("/");
  };
  return (
    <button className={"flex " + classProp} onClick={signInWithGoogle}>
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
