import { LoginModel } from "../login.model";

export class LoginViewModel {
    loginCredentials: LoginModel = new LoginModel();
    loginResponse:LoginModel = new LoginModel();

    isDisplayUserName : boolean = false;
    isDisplayPassword : boolean = false;
}