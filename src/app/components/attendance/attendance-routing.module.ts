import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHeaderService } from '@app/services/globalheader.service';
import { AttendanceComponent } from './attendance.component';
import { extract } from '@app/core/export';

const routes: Routes = [
  GlobalHeaderService.childRoutes([
  { path: 'attendance', component: AttendanceComponent, data: { title: extract('Attendance') } }
])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
