import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface Props {
  classProp: string;
}

const EmailAndPassword = ({ classProp }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={classProp}>
      <input
        type="text"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign in</button>
    </div>
  );
};

export default EmailAndPassword;
