import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  login(userId:string , password:string){
    const request={
      email : userId,
      password : password
    }
    return this._http.post('http://34.213.106.173/api/user/login',request,this.httpOptions)
  }

  logout(){
    return this._http.post('http://34.213.106.173/api/user/logout',{},this.httpOptions)
  }
}
