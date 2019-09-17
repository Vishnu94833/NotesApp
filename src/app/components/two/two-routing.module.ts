import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHeaderService } from '@app/services/globalheader.service';
import { extract } from '@app/core/export';
import { TwoComponent } from './two.component';

const routes: Routes = [
  GlobalHeaderService.childRoutes([
    // { path: 'register', component: RegisterComponent, data: { title: extract('Register') } }
    { path: 'two', component: TwoComponent, data: { title: extract('Two') } }

  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule { }
