import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '@app/models/login.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  mockUrl = 'http://localhost:3000/login';


  constructor(
    private _http: HttpClient,
  ) { }

  login(res:LoginModel):Observable<LoginModel>{
    const request={
      userName : res.userName,
      password : res.password
    }
    return this._http.post<LoginModel>(this.mockUrl,request,this.httpOptions)
  }

  logout(){
    return this._http.post('http://34.213.106.173/api/user/logout',{},this.httpOptions)
  }

  getUsers():Observable<LoginModel>{
    return this._http.get<LoginModel>(this.mockUrl)
  }
}
