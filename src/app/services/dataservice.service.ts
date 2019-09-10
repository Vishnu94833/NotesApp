import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customers } from '@app/models/customers.model';

@Injectable()
export class DataService {
  newEmployee: Customers = new Customers();

  private messageSource = new BehaviorSubject(this.newEmployee);
  currentMessage = this.messageSource.asObservable();

  constructor() { }


  changeMessage(message: any) {
    this.messageSource.next(message)
    
  }

}