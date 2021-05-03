import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { DataModel } from '../models/DataModel'
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URI = 'http://localhost:3000'
  constructor(private http: HttpClient) { 
   
  }
  getData(indice:string){
    return this.http.get(`${this.API_URI}/api/data/${indice}`);
  }
}
