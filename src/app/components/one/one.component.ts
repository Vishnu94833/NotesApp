import { Component, OnInit } from '@angular/core';
import { Customers } from '@app/models/customers.model';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  message  =  'Hello World'

  constructor() { }

  ngOnInit() {
    console.log(this.message);
  }

}
