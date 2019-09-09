// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-parent',
//   templateUrl: './parent.component.html',
//   styleUrls: ['./parent.component.scss']
// })
// export class ParentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/dataservice.service';
import { Router } from '@angular/router';
import { CustomerService } from '@app/services/customer.service';
import { UserLoginModel } from '@app/models/view-models/user.model';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message: any;
  public vm: UserLoginModel = new UserLoginModel();

  constructor(private data: DataService, private route: Router, private cust: CustomerService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(
      response => {        

        this.vm.newEmployee.employeeId = response.employeeId;
        this.vm.newEmployee.firstName = response.firstName;
        this.vm.newEmployee.lastName = response.lastName;
        this.vm.newEmployee.address = response.address;
        this.vm.newEmployee.city = response.city;
        this.vm.newEmployee.state = response.state;
        this.vm.newEmployee.orderTotal = response.orderTotal;
      }
    )
  }

  goBack(message: any) {
    this.cust.addCustomer(message).subscribe(res => console.log(res)
    )
    console.log('success ***********************', message);
  }

}