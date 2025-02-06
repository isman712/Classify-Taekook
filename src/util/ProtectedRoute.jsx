import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Noti from "./Noti";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) {
    return null;
  }

  if (!user) {
    Noti(
      "error",
      "Sin acceso",
      "Debes iniciar sesión para ingresar a las listas",
      false
    );
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
