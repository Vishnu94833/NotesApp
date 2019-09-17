import { Component, OnInit, Input, ViewChild, TemplateRef, ViewChildren } from '@angular/core';
import { DataService } from '@app/services/dataservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '@app/services/customer.service';
import { UserLoginModel } from '@app/models/view-models/user.model';
import { MatDialog } from '@angular/material';
import { element } from 'protractor';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message: any;
  public vm: UserLoginModel = new UserLoginModel();
  @ViewChildren('popup') popUpModal: TemplateRef<any>;

  constructor(private data: DataService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private cust: CustomerService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.cust.FindCountry().subscribe((r: any) => {
      this.vm.CountryList = this.cust.FindCountryName(r)
    })

    let date = this.cust.FindLastUpdatedTime(new Date().toString())

    this.bindData()
    if (this.activatedRoute.snapshot.data.type == 'addMode') {
      return;
    }
    else {
      this.cust.getCustomerById(this.vm.customerId).subscribe((response: any) => {
        this.vm.newEmployee.id = response.employeeId;
        this.vm.newEmployee.employeeId = response.employeeId;
        this.vm.newEmployee.firstName = response.firstName;
        this.vm.newEmployee.lastName = response.lastName;
        this.vm.newEmployee.gender = response.gender;
        this.vm.newEmployee.address = response.address;
        this.vm.newEmployee.city = response.city;
        this.vm.newEmployee.state = response.state;
        this.vm.newEmployee.orderTotal = response.orderTotal;
      })
    }
  }

  gender = [{ Value: 'select', Label: 'Select One...' }, { Value: 'Male', Label: 'Male' }, { Value: 'Female', Label: 'Female' }]

  bindData() {
    this.btnDisplay()
    this.data.currentMessage.subscribe(
      response => {
        this.vm.customerId = response.employeeId;
      })
  }

  addCustomer(message: any) {

    if (this.vm.newEmployee.employeeId == (null || undefined) || this.vm.newEmployee.firstName == '') {
      console.error('error');

    } else {
      this.cust.addCustomer(message).subscribe(res => console.log(res))
      this.routeBackToCustomers()
    }
  }

  updateCustomer(response: any) {
    this.cust.editCustomer(response).subscribe(res => console.log(res))
    this.routeBackToCustomers()
  }

  deleteCustomer(response: number) {
    this.cust.deleteCustomer(response).subscribe(res => console.log(res))
    this.routeBackToCustomers()
  }

  customerById(id: number) {
    this.cust.getCustomerById(id).subscribe((response: any) => {
      this.vm.newEmployee.id = response.employeeId;
      this.vm.newEmployee.employeeId = response.employeeId;
      this.vm.newEmployee.firstName = response.firstName;
      this.vm.newEmployee.lastName = response.lastName;
      this.vm.newEmployee.gender = response.gender;
      this.vm.newEmployee.address = response.address;
      this.vm.newEmployee.city = response.city;
      this.vm.newEmployee.state = response.state;
      this.vm.newEmployee.orderTotal = response.orderTotal;
    })
  }

  routeBackToCustomers() {
    setTimeout(() => {
      // this.openDialogContainer()
      this.route.navigateByUrl('customers')
    }, 1000)
  }

  btnDisplay() {
    if (this.route.url.includes('add')) {
      this.vm.isAddBtnDisplay = !this.vm.isAddBtnDisplay
    } else if (this.route.url.includes('edit')) {
      this.vm.isUpdateBtnDisplay = !this.vm.isUpdateBtnDisplay
    } else if (this.route.url.includes('delete')) {
      this.vm.isDeleteBtnDisplay = !this.vm.isDeleteBtnDisplay
    }
  }

  onGenderSelect(event: string) {
    this.vm.newEmployee.gender = event;
  }

  openDialogContainer(): void {
    const dialogRef = this.dialog.open(this.popUpModal, {
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onCountrySelect(event: any) {
    this.vm.cntry = event.Value;
  }
}