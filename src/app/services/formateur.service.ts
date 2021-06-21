import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) { }
  formateurURL = `${APIURL}/api/formateurs`;
  getAllFormateur(){
    return this.http.get(`${this.formateurURL}`+"/allFormateurs");
  }

  getOneFormateur(id){
    return this.http.get(`${this.formateurURL}`+"/allFormateurs/"+id);
  }
}
