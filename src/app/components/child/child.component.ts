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
    this.data.currentMessage.subscribe(message => message)
    this.bindCustomers();
  }


  bindCustomers() {
    this.cust.getCustomers().subscribe(res => {
      this.vm.customerList = this.cust.customers(res)
    })
  }
  editCustomer(user: any) {
    this.route.navigateByUrl('customer/edit/' + user.employeeId)
    let customerToDelete = this.cust.deleteCustomerLogic(user.employeeId, this.vm.customerList)
    this.vm.newEmployee.id = customerToDelete.id;
    this.vm.newEmployee.employeeId = customerToDelete.employeeId
    this.vm.newEmployee.firstName = customerToDelete.firstName
    this.vm.newEmployee.lastName = customerToDelete.lastName
    this.vm.newEmployee.gender = customerToDelete.gender
    this.vm.newEmployee.address = customerToDelete.address
    this.vm.newEmployee.city = customerToDelete.city
    this.vm.newEmployee.state = customerToDelete.state
    this.vm.newEmployee.orderTotal = customerToDelete.orderTotal
    this.bindData(this.vm.newEmployee)
  }

  addNewCustomer() {
    this.route.navigateByUrl('customer/add');
    this.vm.newEmployee.id = null;
    this.vm.newEmployee.employeeId = null
    this.vm.newEmployee.firstName = ''
    this.vm.newEmployee.lastName = ''
    this.vm.newEmployee.address = ''
    this.vm.newEmployee.city = ''
    this.vm.newEmployee.state = ''
    this.vm.newEmployee.orderTotal = ''
    this.bindData(this.vm.newEmployee)
  }

  deleteCustomer(user: any) {
    this.route.navigateByUrl('customer/delete/' + user.employeeId)
    let customerToDelete = this.cust.deleteCustomerLogic(user.employeeId, this.vm.customerList)
    this.vm.newEmployee.id = customerToDelete.id;
    this.vm.newEmployee.employeeId = customerToDelete.employeeId
    this.vm.newEmployee.firstName = customerToDelete.firstName
    this.vm.newEmployee.lastName = customerToDelete.lastName
    this.vm.newEmployee.gender = customerToDelete.gender
    this.vm.newEmployee.address = customerToDelete.address
    this.vm.newEmployee.city = customerToDelete.city
    this.vm.newEmployee.state = customerToDelete.state
    this.vm.newEmployee.orderTotal = customerToDelete.orderTotal
    this.bindData(this.vm.newEmployee)
  }

  bindData(data: any) {
    this.data.changeMessage(data)
  }
}