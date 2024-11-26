import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Users from "../components/Users";
import Details from "../components/Users/Details";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/details/:id" element={<Details />} />
      <Route path="*" element={<p>NOT FOUND</p>} />
    </Routes>
  );
};

export default AppRoutes;
