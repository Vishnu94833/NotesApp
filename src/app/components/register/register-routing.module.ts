import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHeaderService } from '@app/services/globalheader.service';
import { RegisterComponent } from './register.component';
import { extract } from '@app/core/export';

const routes: Routes = [
  GlobalHeaderService.childRoutes([
    // { path: 'register', component: RegisterComponent, data: { title: extract('Register') } }
    { path: 'register', component: RegisterComponent, data: { title: extract('Register') } }

  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
