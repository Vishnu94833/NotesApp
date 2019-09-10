import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MaterialModule } from './material.module';

import { DataService } from './services/dataservice.service';
import { ParentModule } from './components/parent/parent.module';
import { ChildModule } from './components/child/child.module';
import { GlobalheaderModule } from './components/globalheader/globalheader.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    GlobalheaderModule,
    ParentModule,
    ChildModule,

    
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
