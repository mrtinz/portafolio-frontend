import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  obtenerDatos() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
}


obtenerDatos():Observable<>{
  return this.http.get('.asset/data/data.json')
  }
  
function obtenerDatos() {
  throw new Error('Function not implemented.');
}

