import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { MaterialModule } from '@app/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
