import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '@app/models/login.model';
import { Observable } from 'rxjs';
import { RestApiConstComponent } from 'rest-api-const.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private _http: HttpClient,
  ) { }

  login(res:LoginModel):Observable<LoginModel>{
    const request={
      userName : res.userName,
      password : res.password
    }
    return this._http.post<LoginModel>(RestApiConstComponent.LOGIN_USER,request,this.httpOptions)
  }

  logout(){
    return this._http.post('http://34.213.106.173/api/user/logout',{},this.httpOptions)
  }

  getUsers():Observable<LoginModel>{
    return this._http.get<LoginModel>(RestApiConstComponent.LOGIN_USER)
  }
}
