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


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message:any;

  constructor(private data: DataService,private route:Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(
    
      message => {
        this.message = message 

      }
      
      )  
  }

  goBack(){
    this.route.navigateByUrl('customers')
  }

}