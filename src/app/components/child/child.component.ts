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
    let resp = {
      
    }
    console.log(JSON.stringify(resp));
  }


  bindCustomers() {
    this.cust.getCustomers().subscribe(res => {
      this.vm.customerList = this.cust.customers(res)
      // console.log(this.vm.customerList);
      
    })
  }

  bindFieldValue(response: any) {


    this.vm.newEmployee.id = response.employeeId;
    this.vm.newEmployee.employeeId = response.employeeId
    this.vm.newEmployee.firstName = response.firstName
    this.vm.newEmployee.lastName = response.lastName
    this.vm.newEmployee.gender = response.gender
    this.vm.newEmployee.address = response.address
    this.vm.newEmployee.city = response.city
    this.vm.newEmployee.state = response.state
    this.vm.newEmployee.orderTotal = response.orderTotal
  }

  editCustomer(user: any) {
    this.route.navigateByUrl('customer/edit/' + user.employeeId)
    let editFieldOfCustomer = this.cust.deleteCustomerLogic(user.employeeId, this.vm.customerList)
    this.bindFieldValue(editFieldOfCustomer)
    this.bindData(this.vm.newEmployee)
  }

  addNewCustomer() {
    this.route.navigateByUrl('customer/add');
    this.vm.newEmployee.id = null;
    this.vm.newEmployee.employeeId = null
    this.vm.newEmployee.firstName = ''
    this.vm.newEmployee.lastName = ''
    this.vm.newEmployee.gender = ''
    this.vm.newEmployee.address = ''
    this.vm.newEmployee.city = ''
    this.vm.newEmployee.state = ''
    this.vm.newEmployee.orderTotal = ''
    this.bindData(this.vm.newEmployee)
  }

  deleteCustomer(user: any) {
    this.route.navigateByUrl('customer/delete/' + user.employeeId)
    let customerToDelete = this.cust.deleteCustomerLogic(user.employeeId, this.vm.customerList)
    this.bindFieldValue(customerToDelete)
    this.bindData(this.vm.newEmployee)
  }

  bindData(data: any) {
    this.data.changeMessage(data)
    this.onSearch()
  }
  onSearch() {
    let searchTerm = this.vm.searchCustomer;
    this.vm.customerList = this.cust.filter(this.vm.customerList, searchTerm)
  }

  addAttendance(name:string,id :string){
    this.route.navigate(['attendance',id],{ queryParams: { userName: name } })
  }
  goToHomePage(name:string,id :string){
    this.route.navigate(['homepage'],{ queryParams: { attendanceFor: name } })
  }
}