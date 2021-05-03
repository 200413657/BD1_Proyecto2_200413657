import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaisModel} from '../models/PaisModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  CRUD_URI = 'http://localhost:3000/crud'
  constructor(private http:HttpClient) { }

  getPaises(){
    return this.http.get(`${this.CRUD_URI}/pais`);
  }

  getPais(id: string){
    return this.http.get(`${this.CRUD_URI}/pais/${id}`);
  } 

  getRegion(){
    return this.http.get(`${this.CRUD_URI}/region`);
  }
  delete(id:string){
    return this.http.delete(`${this.CRUD_URI}/pais/${id}`);
  }
  update(id:string, updatePais:PaisModel): Observable<PaisModel>{
    return this.http.put(`${this.CRUD_URI}/pais/${id}`,updatePais);
  }
  savePais(pais:any){
    return this.http.post(`${this.CRUD_URI}/pais`,pais);
  }


}
