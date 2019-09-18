import { Routes, Route } from '@angular/router';
import { GlobalheaderComponent } from '@app/components/globalheader/globalheader.component';
import { RoleGuard } from './role-gaurd.service';


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
