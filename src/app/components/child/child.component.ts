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

  public vm : UserLoginModel = new UserLoginModel();
  public message : any ;

  constructor(private data: DataService, private route: Router,
    private cust:CustomerService) { }

  ngOnInit() {
    // this.data.currentMessage.subscribe(message =>
    //   message
      
    // )
    this.bindCustomers();
  }


  bindCustomers(){
    this.cust.getCustomers().subscribe(res => 
      this.message = this.cust.customers(res)
    )
  }
  // newMessage(user: any) {
  //   this.route.navigateByUrl('customer/edit/'+user.employeeId)
  //   for (let i = 0; i <= this.message.length - 1; i++) {
  //     if (user.employeeId == this.message[i].employeeId) {
  //       this.data.changeMessage(this.message[i])
  //     }
  //   }
  // }

  addNewCustomer(){
    this.route.navigateByUrl('customer/add');
    this.message = ''
  }

  // deleteCustomer(user : any){
  //   this.route.navigateByUrl('customer/delete/'+user.employeeId)
  //   for (let i = 0; i <= this.message.length - 1; i++) {
  //     if (user.employeeId == this.message[i].employeeId) {
  //       this.data.changeMessage(this.message[i])
  //     }
  //   }
  // }
}