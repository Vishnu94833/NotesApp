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


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message:any;

  constructor(private data: DataService,private route:Router,private cust:CustomerService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(
    
      message => {
        this.message = message 

      }
      
      )  
  }

  goBack(message:any){
    // this.route.navigateByUrl('customers')
    this.cust.addCustomer(message).subscribe(res => console.log(res)
    )
    console.log('success ***********************',message);
    
  }

}