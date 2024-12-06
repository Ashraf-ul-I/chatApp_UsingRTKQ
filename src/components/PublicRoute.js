import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
    const isLoggedIn = useAuth();
    console.log(isLoggedIn)

    return !isLoggedIn ? children : <Navigate to="/inbox" />;
};

export default PublicRoute;
