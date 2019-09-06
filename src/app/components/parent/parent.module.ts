import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    FormsModule,
    // ParentRoutingModule
  ]
})
export class ParentModule { }
