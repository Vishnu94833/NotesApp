import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { FormsModule } from '@angular/forms';
import { DropdownWidgetModule } from '../dropdown-widget/dropdown-widget.module';

@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownWidgetModule,
    ParentRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ParentComponent]
})
export class ParentModule { }
