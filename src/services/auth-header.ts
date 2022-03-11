import { AxiosRequestHeaders } from "axios";

export default function authHeader(): AxiosRequestHeaders{
    const user = JSON.parse(localStorage.getItem("user") || '' );
    if (user && user.token){
        return { 'x-access-token': user.token};
    }
    else{
        return {};
    }
}