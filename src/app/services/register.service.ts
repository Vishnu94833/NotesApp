import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RegisterModel } from '@app/models/register.model';
import { Observable } from 'rxjs';
import { RestApiConstComponent } from 'rest-api-const.component';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  registerNew(response: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(RestApiConstComponent.REGISTER_USER, response, this.httpOptions)
  }
}
