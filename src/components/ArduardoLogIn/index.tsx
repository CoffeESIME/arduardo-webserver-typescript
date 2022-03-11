import React from "react";
import { AuthService } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function LogIn() {
  const [correo, setCorreo] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");
  let navigate = useNavigate();
  const handleOnChangeMail = (e: any) => {
    setCorreo(e.target.value);
  };
  const handleOnChangePassword = (e: any) => {
    setContraseña(e.target.value);
  };
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    AuthService.logIn(correo, contraseña).then(() => {
      navigate("/home");
    });
  };
  return (
    <div className="grid grid-cols-7 place-items-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white col-start-3 col-span-3 my-7 ">
        <form>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Correo
            </label>
            <input
              type="email"
              className="form-control
        blocks
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-describedby="emailHelp"
              placeholder="Correo"
              value={correo}
              onChange={handleOnChangeMail}
            />
          </div>
          <div className="form-group mb-6">
            <label
              className="form-label inline-block mb-2 text-gray-700"
              onChange={handleOnChangePassword}
            >
              Contaseña
            </label>
            <input
              type="password"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Contraseña"
              value={contraseña}
              onChange={handleOnChangePassword}
            />
          </div>

          <button
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            type="submit"
            onClick={handleOnSubmit}
          >
            iniciar Sesion
          </button>
          <p className="text-gray-800 mt-6 text-center">
            ¿No estas registrado?{" "}
            <Link
              to="/sign-in"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Registrate
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export { LogIn };
