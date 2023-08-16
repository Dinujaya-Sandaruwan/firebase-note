import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

interface Movie {
  id: string;
  releseDate: number;
  recivedAnOscar: boolean;
  title: string;
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([{}] as Movie[]);
  const movieCollectionRef = collection(db, "movies");

  const [updatedTitle, setUpdatedTitle] = useState<string>("");

  const deleteMovie = async (id: string) => {
    const movieDoc = doc(db, "movies", id);
    deleteDoc(movieDoc);
  };

  const updateMovie = async (id: string) => {
    const movieDoc = doc(db, "movies", id);
    updateDoc(movieDoc, { title: updatedTitle });
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getDocs(movieCollectionRef);
        const filteredData: Movie[] = data.docs.map((doc) => ({
          id: doc.id,
          releseDate: doc.data().releseDate,
          recivedAnOscar: doc.data().recivedAnOscar,
          title: doc.data().title,
        }));
        setMovies(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, [deleteMovie]);

  return (
    <>
      <h1>MovieList</h1>
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <button onClick={() => updateMovie(movie.id)}>Update</button>
          <input
            type="text"
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button onClick={() => deleteMovie(movie.id)}>Delete</button>
          <p>{movie.title}</p>
        </div>
      ))}
    </>
  );
};

export default MovieList;
