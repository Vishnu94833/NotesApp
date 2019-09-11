import { Customers } from "../customers.model";
import { GenderDropdownModel } from "../gender-dropdown.model";

export class UserLoginModel {
    public customerList: Array<Customers> = new Array<Customers>();
    newEmployee: Customers = new Customers();
    public gender: Array<GenderDropdownModel> = new Array<GenderDropdownModel>();
    searchCustomer:any;
    // buttons display
    isUpdateBtnDisplay: boolean = false;
    isDeleteBtnDisplay: boolean = false;
    isAddBtnDisplay: boolean = false;
 
}