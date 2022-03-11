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
        <div>
            <p>Bienvenido a tu Visualizacion de datos por favor escoge una opcion</p>
            <button onClick={handleSignIn}>Registrate</button>
            <button onClick={handleLogIn}>Iniciar Sesión</button>
        </div>
        </>
    );
}