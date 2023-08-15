import { Link, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

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
        </span>
      </nav>
      <div className="gap"></div>

      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};

export default Router;
