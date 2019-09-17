import { NgModule } from '@angular/core';
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
  entryComponents: [ParentComponent]
})
export class ParentModule { }
