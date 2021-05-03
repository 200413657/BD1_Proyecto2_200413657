import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { EncuestaModel} from '../models/PaisModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { }
  getEncuestas(){
    return this.http.get(`${this.API_URI}/encuesta`);
  }

  getEncuesta(id: string){
    return this.http.get(`${this.API_URI}/encuesta/${id}`);
  } 
}
