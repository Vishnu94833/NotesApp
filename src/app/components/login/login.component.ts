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
  pswd: string = '123456789';
  public vm: LoginViewModel = new LoginViewModel();

  constructor(private loginService: LoginService,
    private pswdEncrypt: EncryptpasswordService,
    private route: Router) { }

  ngOnInit() {
    localStorage.setItem('token',this.pswd)
   
  }

  login(response: LoginModel) {
    if (this.vm.loginCredentials.userName.length == 0) {
      this.vm.isDisplayUserName = this.vm.loginCredentials.userName.length == 0 ? true : false;
    } else if (this.vm.loginCredentials.password == '') {
      this.vm.isDisplayPassword = this.vm.loginCredentials.password.length == 0 ? true : false;
    } else {
      let passwordEncrypted = this.pswdEncrypt.set("0123456789123456", response.password);
      this.vm.loginResponse.userName = response.userName;
      this.vm.loginResponse.password = passwordEncrypted;
      this.loginService.login(this.vm.loginResponse).subscribe((res: any) => {
        console.log(res);
      })
    }
  }

  loginPost(response: LoginModel){
    this.loginService.getUsers().subscribe(res => {
      let passwordEncrypted = this.pswdEncrypt.set("0123456789123456", response.password);
      this.vm.loginResponse.userName = response.userName;
      this.vm.loginResponse.password = passwordEncrypted;
      debugger
      if(this.vm.loginResponse.userName === res.userName ){
        debugger
        console.log("success*******");
        if(this.vm.loginResponse.password !== res.password){
          debugger
          console.log("success*******");
        }
      }
    })
  }

  goToRegister() {
    this.route.navigateByUrl('register')
  }
}
