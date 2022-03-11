import { Navigate, useLocation } from "react-router-dom";
import { AuthService } from "../../services/auth.service";

// export const ProtectedRoutes : FC<{redirectTo:string}>=({children, redirectTo}) =>{
//   const userIsLogged = AuthService.getCurrentUser();
//   return userIsLogged ? children : <Navigate to={redirectTo} />;
// };

export function ProtectedRoutes({ children }: { children: JSX.Element }) {
  let auth = AuthService.isAuthenticated();
  let location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/log-in" state={{ from: location }} replace />;
  }

  return children;
}