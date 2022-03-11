import axios from "axios";
export const API_URL='http://192.168.1.76:4000/API/';

export class AuthService {

    public static isAuthenticated(): boolean{
      let authenticate = !!localStorage.getItem('user');
      return authenticate;
    }
    public static async  register ( nombre: String, apellido : String, empresa: String, email : String, password: String) {
        return axios.post(`${API_URL}auth/new-user`, 
        { name: nombre, last_name: apellido, company:empresa, email:email, password:password })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    };
    public static async logIn (email: String, password: String){
        return axios.post(`${API_URL}auth/login`,{email:email ,passwordreq: password})
        .then(response=>{
            if (response.data.token){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
    };
    public static logOut(){
        localStorage.removeItem("user");
    };
    
    public static getCurrentUser() {
        if(localStorage.getItem("user")){
            return JSON.parse(localStorage.getItem("user") || '');
        }
        else{
            return {};
        }
    };

}


