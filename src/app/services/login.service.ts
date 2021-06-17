import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login: string;

  authenticateMe(login: string, pass : string){
    let body= { // écrire comme dans postman
      "email": login,
      "pass": pass
    }
    console.log(body);
    return this.http.post("http://localhost:8080/authenticate", body);
  }

  getByEmail(email){
    return this.http.get("http://localhost:8080/getByEmail/"+email);
  }

  logOut(){
    this.deleteToken();
  }

  setLogin(login:string){
    this.login = login;
  }

  getLogin(){
    return this.login;
  }

  setToken(login: string, token: string){
    sessionStorage.setItem("token", token);
    this.setLogin(login);
  }

  getToken(){
    return sessionStorage.getItem("token");
  }

  deleteToken(){
    localStorage.removeItem("token");
  }



}
