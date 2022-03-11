import { Link, useNavigate } from "react-router-dom";

interface NavBarProps{

  logOut: ()=> void;
}

export const NavBar = ({logOut}: NavBarProps) => {
    const navigate = useNavigate(); 
    const handleOnClick = () =>{
        logOut();
        navigate('/');
    }
    const user = localStorage.getItem('user') || null; 
  return (
    <div className="mx-5 h-4/5 w-1/4 bg-green-600 rounded-t-lg rounded-b-xl py-10">
      <nav className=" bg-green-600 ">
        {!!user && (
          <>
          <button className="block bg-green-600 p-2 px-3  w-full"><Link to="" className="text-white">Tablas</Link></button>
          <button className="block bg-green-600 p-2 px-3 w-full"><Link to="" className="text-white">Graficas</Link></button>
          <button className="block bg-green-600 p-2 px-3 w-full"><Link to="" className="text-white">Mimico</Link></button>
          <button className="block bg-green-600 p-2 px-3 w-full text-white" onClick={handleOnClick}>LogOut</button>
          </>
        )}
      </nav>
    </div>
  );
};
