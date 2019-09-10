import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customers } from '@app/models/customers.model';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  mockUrl = 'http://localhost:3000/customers';

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

  addCustomer(resp: Customers): Observable<Customers> {
    let res = {
      id: resp.employeeId,
      employeeId: resp.employeeId,
      firstName: resp.firstName,
      lastName: resp.lastName,
      address: resp.address,
      city: resp.city,
      state: resp.state,
      orderTotal: resp.orderTotal
    }
    return this.http.post<Customers>(this.mockUrl, res  , headerOption);
  }

  addNewCustomer(){
    
  }

  deleteCustomerLogic(customerId: number, customerObject: any) {
    for (var i = 0; i <= customerObject.length - 1; i++) {
      let obj = new Customers();
      if (customerId == customerObject[i].employeeId) {
        obj.employeeId = customerObject[i].employeeId;
        obj.firstName = customerObject[i].firstName;
        obj.lastName = customerObject[i].lastName;
        obj.city = customerObject[i].city;
        obj.state = customerObject[i].state;
        obj.address = customerObject[i].address;
        obj.orderTotal = customerObject[i].orderTotal;
        return obj;
      }
    }
  }



  deleteCustomer(id: number): Observable<Customers> {
    return this.http.delete<Customers>(this.mockUrl + '/' + id, headerOption);
  }

  editCustomer(res: any): Observable<Customers> {
    return this.http.put<Customers>(this.mockUrl + '/' + res.id,res, headerOption);
  }

}
