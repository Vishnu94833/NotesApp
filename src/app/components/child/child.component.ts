// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   templateUrl: './child.component.html',
//   styleUrls: ['./child.component.scss']
// })
// export class ChildComponent implements OnInit {

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
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  public vm: UserLoginModel = new UserLoginModel();
  public message: any;

  constructor(private data: DataService, private route: Router,
    private cust: CustomerService) { }

  ngOnInit() {
    // this.data.currentMessage.subscribe(message =>
    //   message

    // )
    this.bindCustomers();
  }


  bindCustomers() {
    this.cust.getCustomers().subscribe(res => {
      this.vm.customerList = this.cust.customers(res)
    }

    )
  }
  newMessage(user: any) {

    this.route.navigateByUrl('customer/edit/' + user.employeeId)
    for (let i = 0; i <= this.vm.customerList.length - 1; i++) {
      if (user.employeeId == this.vm.customerList[i].employeeId) {
        console.log(this.vm.customerList[i]);
        this.vm.newEmployee.id = this.vm.customerList[i].id;
        this.vm.newEmployee.employeeId = this.vm.customerList[i].employeeId;
        this.vm.newEmployee.firstName = this.vm.customerList[i].firstName;
        this.vm.newEmployee.lastName = this.vm.customerList[i].lastName;
        this.vm.newEmployee.address = this.vm.customerList[i].address;
        this.vm.newEmployee.city = this.vm.customerList[i].city;
        this.vm.newEmployee.state = this.vm.customerList[i].state;
        this.vm.newEmployee.orderTotal = this.vm.customerList[i].orderTotal;
        // console.log(this.vm.newEmployee);

        this.data.changeMessage(this.vm.newEmployee)
      }
    }
  }

  addNewCustomer() {
    this.route.navigateByUrl('customer/add');
    this.message = ''
  }

  deleteCustomer(user: any) {
    // this.route.navigateByUrl('customer/delete/'+user.employeeId)


    for (let i = 0; i <= this.vm.customerList.length - 1; i++) {
      if (user.employeeId == this.vm.customerList[i].employeeId) {
        // console.log(this.vm.customerList[i]);
        this.vm.newEmployee.id = this.vm.customerList[i].id;
        this.vm.newEmployee.employeeId = this.vm.customerList[i].employeeId;
        this.vm.newEmployee.firstName = this.vm.customerList[i].firstName;
        this.vm.newEmployee.lastName = this.vm.customerList[i].lastName;
        this.vm.newEmployee.address = this.vm.customerList[i].address;
        this.vm.newEmployee.city = this.vm.customerList[i].city;
        this.vm.newEmployee.state = this.vm.customerList[i].state;
        this.vm.newEmployee.orderTotal = this.vm.customerList[i].orderTotal;
        // console.log(this.vm.newEmployee);

        this.data.changeMessage(this.vm.newEmployee)
        this.cust.deleteCustomer(user.employeeId).subscribe(res => {
          console.log(res)
          this.bindCustomers()
        }
        )
      }
    }
  }
}