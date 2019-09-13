import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHeaderService } from '@app/services/globalheader.service';
import { extract } from '@app/core/export';
import { LoginComponent } from './login.component';

const routes: Routes = [
  GlobalHeaderService.childRoutes([
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: { title: extract('Customers') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
