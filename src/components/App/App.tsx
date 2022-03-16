import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "../ArduardoSignIn";
import { Header } from "../ArduardoHeader";
import { Footer } from "../ArduardoFooter";
import { LogIn } from "../ArduardoLogIn";
import { InitialMenu } from "../InitialMenu";
import { LastDataArduardo } from "../LastDataArduardo";
import { NavBar } from "../NavBar";
import { AuthService } from "../../services/auth.service";
import { ProtectedRoutes } from "../ProtectedRoutes";
function App() {
  return (
    <div className="bg-slate-900 w-screen h-screen">
      <BrowserRouter >
        <Header />
        <div className="flex flex-row">
        <NavBar logOut={AuthService.logOut} ></NavBar>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoutes >
                <LastDataArduardo />
              </ProtectedRoutes>
            }
          />
          <Route path="/" element={<InitialMenu />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
