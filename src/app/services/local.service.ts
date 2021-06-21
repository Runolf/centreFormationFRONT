import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http: HttpClient) { }

  localURL = `${APIURL}/api/locaux`;

  getAllLocaux(){
    return this.http.get(`${this.localURL}/allLocaux`);
  }

  getOne(id){
    return this.http.get(`${this.localURL}/allLocaux/`+id)
  }

}
