// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class GlobalHeaderService {

//   constructor() { }
// }
import { Routes, Route } from '@angular/router';

import { RoleGuard } from './role-gaurd.service';

import { GlobalheaderComponent } from '@app/components/globalheader/globalheader.component';
// import { CustomerComponent } from '@app/components/customer/customer.component';
// import { AuthenticationGuard } from '@app/core';
// import { RoleGuard } from './role-guard.service';

/**
 * Provides helper methods to create routes.
 */
export class GlobalHeaderService {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: GlobalheaderComponent,
      children: routes,
      canActivate: [RoleGuard],
      data: { reuse: true }
    };
  }
}
