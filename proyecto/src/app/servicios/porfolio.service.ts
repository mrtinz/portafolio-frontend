import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  
 

  constructor() { }
  
  obtenerDatos(){
  console.log("Esta corriendo");
 }


}