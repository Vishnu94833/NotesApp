import { Customers } from "../customers.model";

export class UserLoginModel {
    public customerList: Array<Customers> = new Array<Customers>();
    newEmployee: Customers = new Customers();

    // buttons display
    isUpdateBtnDisplay: boolean = false;
    isDeleteBtnDisplay: boolean = false;
    isAddBtnDisplay: boolean = false;
 
}