import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PreguntaModel} from '../models/PreguntasModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  CRUD_URI = 'http://localhost:3000/crud'
  constructor(private http:HttpClient) { }
  getPreguntas(){return this.http.get(`${this.CRUD_URI}/pregunta`);}
  getPregunta(id:string){return this.http.get(`${this.CRUD_URI}/pregunta/${id}`);}

  updatePregunta(id:string,updatePregunta:PreguntaModel): Observable<PreguntaModel>{
    return this.http.put(`${this.CRUD_URI}/pregunta/${id}`,updatePregunta);
  }

  deletePregunta(id:string){return this.http.delete(`${this.CRUD_URI}/pregunta/${id}`);}
  savePregunta(pregunta:any){return this.http.post(`${this.CRUD_URI}/pregunta`,pregunta);}
}
