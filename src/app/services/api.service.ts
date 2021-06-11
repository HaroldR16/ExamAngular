import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serviceUrl = "http://localhost:4000/"

  constructor(
    private http : HttpClient
  ) { }

  GetHello(){
    return this.http.get(`${this.serviceUrl}api/hello`);
  }

  PostName(name: any){
    return this.http.post<any>(`${this.serviceUrl}api/name`, name);
  }
}
