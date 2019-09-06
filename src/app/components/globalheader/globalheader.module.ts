import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalheaderComponent } from './globalheader.component';
import { MaterialModule } from '@app/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GlobalheaderComponent],
  imports: [
    CommonModule,  MaterialModule, RouterModule
  ]
})
export class GlobalheaderModule { }
