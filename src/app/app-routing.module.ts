import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHeaderService } from './services/globalheader.service';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [

    GlobalHeaderService.childRoutes([
      {
        path: 'login',
        loadChildren: 'app/components/login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: 'app/components/register/register.module#RegisterModule'
      },
      {
        path: 'customers',
        loadChildren: 'app/components/child/child.module#ChildModule'
      },
      {
        path: 'one',
        loadChildren: 'app/components/one/one.module#OneModule'
      },
      {
        path: 'two',
        loadChildren: 'app/components/two/two.module#TwoModule'
      },
      {
        path: 'customer/:id',
        loadChildren: 'app/components/parent/parent.module#ParentModule'
      },
      // Fallback when no prior route is matched
      { path: '', redirectTo: '/login', pathMatch: 'full' }
  ])

  // { path: 'customers', component: ChildComponent },
  // { path: 'customer', 
  // children: [
  //   { path: 'add', component: ParentComponent, data: { type: 'addMode' } },
  //   { path: 'edit/:id', component: ParentComponent, data: { type: 'editMode' } },
  //   { path: 'delete/:id', component: ParentComponent, data: { type: 'readOnlyMode' } }
  // ] },
  // { path: '**', component: ChildComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
