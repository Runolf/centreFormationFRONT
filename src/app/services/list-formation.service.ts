import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {APIURL} from '../constant';

@Injectable({
  providedIn: 'root'
})
export class ListFormationService {

  constructor(private http: HttpClient) { }

  formationURL = `${APIURL}/api/formations`;

  getAllFormation(){
    return this.http.get(`${this.formationURL}/allFormations`);
  }

  getOneFormation(id){
    return this.http.get(`${this.formationURL}/allFormations/`+id); // php formation
  }

  createFormation(intitule: string, duree: number, prix: number, maxInscription: number, minEleve: number){
    let body = {
      "intitule": intitule,
      "duree": duree,
      "prixBase": prix,
      "maxInscription": maxInscription,
      "minEleve": minEleve
    }

    console.log(body);
    return this.http.post(`${this.formationURL}/formations`, body);
  }
}
