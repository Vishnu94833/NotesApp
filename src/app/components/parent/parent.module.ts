import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ParentRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ParentComponent]
})
export class ParentModule { }
