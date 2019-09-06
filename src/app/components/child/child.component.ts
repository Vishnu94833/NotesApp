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


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  message = [{
    employeeId: 168901,
    firstName: "vishnu",
    lastName:"vel",
    address:"koperkhairne",
    city: "mumbai",
    state: "maharashtra",
    orderTotal:"1234"
  },{
    employeeId: 168941,
    firstName: "subramaniam",
    lastName:"ramasamy",
    address:"koperkhairne",
    city: "mumbai",
    state: "maharashtra",
    orderTotal:"1234"
  },{
    employeeId: 168951,
    firstName: "murali",
    lastName:"kalavakuri",
    address:"airoli",
    city: "mumbai",
    state: "maharashtra",
    orderTotal:"1234"
  }];

  constructor(private data: DataService, private route: Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message =>
      // console.log(this.message, message)
      message
    )
  }

  newMessage(user: any) {
    this.route.navigateByUrl('customer/edit/'+user.employeeId)
    for (let i = 0; i <= this.message.length - 1; i++) {
      if (user.employeeId == this.message[i].employeeId) {
        this.data.changeMessage(this.message[i])
      }
    }
  }

  addNewCustomer(){
    // this.message = null;
    this.route.navigateByUrl('customer/add')
  }

  deleteCustomer(user : any){
    this.route.navigateByUrl('customer/delete/'+user.employeeId)
    for (let i = 0; i <= this.message.length - 1; i++) {
      if (user.employeeId == this.message[i].employeeId) {
        this.data.changeMessage(this.message[i])
      }
    }
  }
}