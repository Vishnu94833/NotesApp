import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
// import { LocalStorageService } from './local.storage.service';
// import { UserInfoModel } from '@app/model/user-info-model';
// import { USER_INFO_KEY, TEAM_MEMBER } from '@app/common/constants';
// import { TEAM_MEMBER_ROUTES, STORE_BASED_ROUTES } from '@app/model/routes-info';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {
    constructor(private _router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }

}
