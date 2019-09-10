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
    this.bindData()
    console.log(this.gender);

  }

  gender = [{ Value: '0', Label: 'Male' }, { Value: '1', Label: 'Female' }, { Value: '2', Label: 'Other' }]

  bindData() {
    this.btnDisplay()
    this.data.currentMessage.subscribe(
      response => {
        this.vm.newEmployee.id = response.employeeId;
        this.vm.newEmployee.employeeId = response.employeeId;
        this.vm.newEmployee.firstName = response.firstName;
        this.vm.newEmployee.lastName = response.lastName;
        this.vm.newEmployee.gender = response.gender;
        this.vm.newEmployee.address = response.address;
        this.vm.newEmployee.city = response.city;
        this.vm.newEmployee.state = response.state;
        this.vm.newEmployee.orderTotal = response.orderTotal;
        console.log(response);

      }
    )
  }
  addCustomer(message: any) {
    this.cust.addCustomer(message).subscribe(res => console.log(res))

  }

  updateCustomer(response: any) {
    this.cust.editCustomer(response).subscribe(res => console.log(res))
  }

  deleteCustomer(response: number) {
    this.cust.deleteCustomer(response).subscribe(res => console.log(res))
  }

  btnDisplay() {
    if (this.route.url.includes('add')) {
      this.vm.isAddBtnDisplay = !this.vm.isAddBtnDisplay
    } else if (this.route.url.includes('edit')) {
      this.vm.isUpdateBtnDisplay = !this.vm.isUpdateBtnDisplay
    } else if (this.route.url.includes('delete')) {
      this.vm.isDeleteBtnDisplay = !this.vm.isDeleteBtnDisplay
    }
  }

  onGenderSelect(event: string) {
    console.log(event);
    
    this.vm.newEmployee.gender = parseInt(event);
  }
}