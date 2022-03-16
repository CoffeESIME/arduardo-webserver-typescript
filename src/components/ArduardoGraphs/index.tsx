import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getArduardoDataByDate } from "../../services/user.service";
interface Data{
    grd_id: number;
    timestamp: string;
    address: string;
    value: number;
}
export const ArduardoGraficas = ()=>{
    useEffect(() => {  
        const nav = useNavigate();
        const [datos, setDatos] = useState<Array<Data>>([]);
        useEffect(() => {
          const getData = async () => {
            try {
              const response = await getArduardoDataByDate();
              setDatos(response.data);
            } catch (error) {
              window.localStorage.removeItem("user");
              nav("/");
            }
          };
          getData();
        }, [nav]);
    }, [])
    return (
        <>
        </>
    );
    
}