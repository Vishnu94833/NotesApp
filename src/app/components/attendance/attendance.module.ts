import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [AttendanceComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
