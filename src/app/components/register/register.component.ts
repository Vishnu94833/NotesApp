import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '@app/models/view-models/login.view.model';
import { RegisterViewModel } from '@app/models/view-models/register.view.model';
import { RegisterModel } from '@app/models/register.model';
import { RegisterService } from '@app/services/register.service';
import { EncryptpasswordService } from '@app/services/encryptpassword.service';
import * as moment from 'moment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public vm: RegisterViewModel = new RegisterViewModel();

  constructor(private registerService: RegisterService, private pswdEncrypt: EncryptpasswordService) { }

  ngOnInit() { 
  }

  register(response: RegisterModel) {
    let register: RegisterModel = new RegisterModel();
    register.email = response.email
    register.password = this.pswdEncrypt.set("0123456789123456", response.password);
    register.userName = response.userName
    this.registerService.registerNew(register).subscribe(res =>
      console.log(res)
    )
  }
}
