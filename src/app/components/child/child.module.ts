import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
