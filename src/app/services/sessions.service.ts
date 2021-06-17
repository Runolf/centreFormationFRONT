import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import {APIURL} from '../constant';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private http: HttpClient) { }

  sessionURL = `${APIURL}/api/sessions`;

  getAllSession(){
    return this.http.get(`${this.sessionURL}/allSessions`);
  }

  getOneSession(id){
    return this.http.get(`${this.sessionURL}/allSessions/`+id);
  }

  createSession(startDate: string, endDate: string, idFormateur: number, idLocal: number, idFormation: number){
    let body = {
      "startDate": startDate,
      "endDate": endDate,
      "idFormateur": {
        "idFormateur": idFormateur
      },
      "idLocal": {
        "idLocal": idLocal
      },
      "idFormation": {
        "idFormation": idFormation
      }
    }

    console.log(body);
    return this.http.post(`${this.sessionURL}/sessions`, body);
  }
}
