import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../config/firebase";

const AddMovies = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);
  const [oscer, setOscer] = useState(false);

  const movieCollectionRef = collection(db, "movies");

  const handleOscar = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "true") setOscer(true);
    if (event.target.value === "false") setOscer(false);
  };

  const onSubmitMovie = async () => {
    try {
      await addDoc(movieCollectionRef, {
        releseDate: year,
        recivedAnOscar: oscer,
        title: title,
        userId: auth?.currentUser?.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="movie-form">
      <input
        type="text"
        placeholder="Movie title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Released year..."
        onChange={(e) => setYear(Number(e.target.value))}
      />
      <select onChange={(e) => handleOscar(e)}>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <button onClick={onSubmitMovie}>Submit</button>
    </div>
  );
};

export default AddMovies;
