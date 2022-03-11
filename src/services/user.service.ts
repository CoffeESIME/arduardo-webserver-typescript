import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://192.168.1.76:4000/API/";

export const getArduardoLastData=()=>{
    return axios.get(API_URL+'arduardo', {
        headers: authHeader()
    })
}