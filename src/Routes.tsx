import { Link, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import MovieList from "./components/MovieList";
import AddMovies from "./components/AddMovies";
import Upload from "./pages/Upload";

const Router = () => {
  return (
    <>
      <nav className="main-nav">
        <span className="heading">
          <Link to="/">Firebase Notes</Link>
        </span>
        <span className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/auth">Auth</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/upload">Upload</Link>
        </span>
      </nav>
      <div className="gap"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/upload" element={<Upload />} />
        <Route
          path="/movies"
          element={
            <>
              <AddMovies />
              <MovieList />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
