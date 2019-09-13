import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RegisterModel } from '@app/models/register.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  mockUrl = 'http://localhost:3000/register';

  registerNew(response:RegisterModel):Observable<RegisterModel>{
    return this.http.post<RegisterModel>(this.mockUrl,response,this.httpOptions)
  }
}
