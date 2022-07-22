import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate} from "react-router-dom";
import User from "../Components/User/User";

function ProtectedRoute() {
  const { login } = useContext(UserContext);

  if (login === true){
    return <User />
  } else if (login === false) {
    return <Navigate to="/login" />;
  }
  else return null;
}

export default ProtectedRoute;
