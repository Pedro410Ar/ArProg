import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Educacion } from './educacion';

@Injectable({
  providedIn: 'root'
})
export class PiterService {
   //private URL:string = "http://localhost:8080/portfolio4/persona";
  
  private url:string = "https://6205c9bd161670001741bd15.mockapi.io/Educacion";
  

  //private url:string = "mysql://ujiwsmn0ekadtqg1:5D5RFuKcukiX1dxtLxYH@bq5iyqc9c8ga1cvcjtp3-mysql.services.clever-cloud.com:3306/bq5iyqc9c8ga1cvcjtp3";

  constructor(private http:HttpClient) { }

  //getAll():Observable<Educacion[]>{ return this.http.get<Educacion[]>(this.URL); }
  //get(id:number):Observable<Educacion>{ return this.http.get<Educacion>(this.URL); }

  getAll():Observable<Educacion[]>{ return this.http.get<Educacion[]>(this.url); }

  get(id:number):Observable<Educacion>{ return this.http.get<Educacion>(this.url); }


}
