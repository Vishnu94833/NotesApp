import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHeaderService } from '@app/services/globalheader.service';
import { extract } from '@app/core/export';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  GlobalHeaderService.childRoutes([
    { path: 'homepage', component: HomepageComponent, data: { title: extract('Homepage') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
