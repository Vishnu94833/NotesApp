import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '@app/models/view-models/login.view.model';
import { RegisterViewModel } from '@app/models/view-models/register.view.model';
import { RegisterModel } from '@app/models/register.model';
import { RegisterService } from '@app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public vm: RegisterViewModel = new RegisterViewModel();

  constructor(private registerService:RegisterService) { }

  ngOnInit() {
    console.log("success_________",this.vm.registerArray.email);
  }
  register(response:RegisterModel){
    console.log(response);
    this.registerService.registerNew(response).subscribe(res => 
      console.log(res)
      )
  }
}
