import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signMe(email: string, nom: string, prenom: string, adresse: string, telephone: string, pass: string){
    let body = {
      "email": email,
      "nom": nom,
      "prenom": prenom,
      "adresse": adresse,
      "telephone": telephone,
      "pass": pass
    }

    console.log(body);
  
    return this.http.post("http://localhost:8080/api/stagiaires/stagiaire", body);
  }


}
