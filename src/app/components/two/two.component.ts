import { Component, OnInit, Input } from '@angular/core';
import { Customers } from '@app/models/customers.model';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  @Input() twoMessage : string;

  constructor() { }

  ngOnInit() {
    // console.log(this.message);
    
  }

}
