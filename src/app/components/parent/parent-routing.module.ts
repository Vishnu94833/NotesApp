import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHeaderService } from '@app/services/globalheader.service';
import { extract } from '@app/core/export';
import { ParentComponent } from './parent.component';

const routes: Routes = [

  // GlobalHeaderService.childRoutes([
  //   {
  //     path: 'user-management',
  //     children: [
  //       { path: 'add', component: UserManagementComponent, data: { type: 'addMode' } },
  //       { path: 'edit/:id', component: UserManagementComponent, data: { type: 'editMode' } },
  //       { path: 'myaccount', component: UserManagementComponent, data: { type: 'readOnlyMode' } }
  //     ],
  //     data: { title: extract('User Management') }
  //   }
  // ])

  GlobalHeaderService.childRoutes([
    { path: 'customer', 
    children: [
            { path: 'add', component: ParentComponent, data: { type: 'addMode' } },
            { path: 'edit/:id', component: ParentComponent, data: { type: 'editMode' } },
            { path: 'delete/:id', component: ParentComponent, data: { type: 'deleteMode' } }
          ], 
    data: { title: extract('customer') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
