import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/services/login.service';
// import { LoginModel } from '@app/models/login';
import { LoginViewModel } from '@app/models/view-models/login.view.model';
import { LoginModel } from '@app/models/login.model';
import { EncryptpasswordService } from '@app/services/encryptpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  pswd: string;
  public vm: LoginViewModel = new LoginViewModel();

  constructor(private loginService: LoginService, 
    private pswdEncrypt: EncryptpasswordService,
    private route:Router) { }

  ngOnInit() {
    this.loginService.getUsers().subscribe(res => console.log(res))
  }

  login(response: LoginModel) {
    let passwordEncrypted = this.pswdEncrypt.set("0123456789123456", response.password);
    this.vm.loginResponse.userName = response.userName;
    this.vm.loginResponse.password = passwordEncrypted;
    this.loginService.login(this.vm.loginResponse).subscribe((res: any) => {
      console.log(res);
    })

  }

  goToRegister(){
    this.route.navigateByUrl('register')
  }
}
