import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://192.168.1.76:4000/API/";

export const getArduardoLastData=()=>{
    let LastData;
    try {
        LastData= axios.get(API_URL+'arduardo', {
            headers: authHeader()
        })
    } catch (error) {
      LastData={data:''}
    }
    return LastData
}

export const getArduardoDataByDate = () => {
    let DateData;
    try {
        DateData= axios.get(API_URL+'arduardo/fecha', {
            headers: authHeader()
        })
    } catch (error) {
      DateData={data:''}
    }
    return DateData
}