import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one.component';
import { extract } from '@app/core/export';
import { GlobalHeaderService } from '@app/services/globalheader.service';

const routes: Routes = [
  GlobalHeaderService.childRoutes([
    // { path: 'register', component: RegisterComponent, data: { title: extract('Register') } }
    { path: 'one', component: OneComponent, data: { title: extract('One') } }

  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneRoutingModule { }
