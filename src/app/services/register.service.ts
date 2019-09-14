import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RegisterModel } from '@app/models/register.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  baseUrl = environment.apiBaseUrl

  registerNew(response: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(`${this.baseUrl}`+'register', response, this.httpOptions)
  }
}
