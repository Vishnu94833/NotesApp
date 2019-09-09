import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customers } from '@app/models/customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  mockUrl = 'http://localhost:3000/Customers';

  getCustomers() {
    return this.http.get(this.mockUrl)
  }

  public customers(response: any) {
    let list: Array<Customers> = new Array<Customers>();
    response.forEach((item: any) => {
      let obj = new Customers();
      obj.employeeId = item.employeeId
      obj.firstName = item.firstName
      obj.lastName = item.lastName
      obj.city = item.city
      obj.state = item.state
      obj.address = item.address
      obj.orderTotal = item.orderTotal
      list.push(obj)
    });
   return list;
  }


  addCustomer(){
    let res={
      
    };
    return this.http.post(this.mockUrl,res)
  }
 
}
