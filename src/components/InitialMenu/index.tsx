import { useNavigate } from "react-router-dom";

export const InitialMenu = ()=>{
    let navigate = useNavigate();
    const handleSignIn =()=>{
        navigate("/sign-in")
    }
    const handleLogIn =() =>{
        navigate("/log-in")
    }
    return(
        <>
        <div className="w-full grid grid-cols-8 justify-center justify-items-center items-center gap-3">
            <p className="col-span-8 text-white font-bold text-center mb-10">Bienvenido a tu Visualizacion de datos por favor escoge una opcion</p>
            <button className="w-full text-white bg-fuchsia-600 rounded-full p-3 col-start-4" onClick={handleSignIn}>Registrate</button>
            <button className="w-full text-white bg-fuchsia-600 rounded-full p-3  " onClick={handleLogIn}>Iniciar Sesión</button>
        </div>
        </>
    );
}