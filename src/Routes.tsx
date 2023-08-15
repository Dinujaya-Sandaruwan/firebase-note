import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

const Router = () => {
  return (
    <>
      <nav>
        <h2>This is the nav</h2>
      </nav>

      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};

export default Router;
