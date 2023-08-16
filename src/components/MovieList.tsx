import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

interface Movie {
  id: string;
  releseDate: number;
  recivedAnOscar: boolean;
  title: string;
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([{}] as Movie[]);
  const movieCollectionRef = collection(db, "movies");

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
  }, []);

  return (
    <>
      <h1>MovieList</h1>
      {movies.map((movie, index) => (
        <p key={index}>{movie.id}</p>
      ))}
    </>
  );
};

export default MovieList;
