import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHeaderService } from '@app/services/globalheader.service';
import { ChildComponent } from './child.component';
import { extract } from '@app/core/export';

const routes: Routes = [

  GlobalHeaderService.childRoutes([
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    { path: 'customers', component: ChildComponent, data: { title: extract('Customers') } }
  ])

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
