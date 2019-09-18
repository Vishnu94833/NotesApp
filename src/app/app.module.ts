import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MaterialModule } from './material.module';

import { DataService } from './services/dataservice.service';
import { ParentModule } from './components/parent/parent.module';
import { ChildModule } from './components/child/child.module';
import { GlobalheaderModule } from './components/globalheader/globalheader.module';
import { LoginModule } from './components/login/login.module';
import { EncryptpasswordService } from './services/encryptpassword.service';
import { RegisterModule } from './components/register/register.module';
import { AttendanceModule } from './components/attendance/attendance.module';
import { HomepageModule } from './components/homepage/homepage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    GlobalheaderModule,
    LoginModule,
    RegisterModule,
    ParentModule,
    ChildModule,
    HomepageModule,
    AttendanceModule,
 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DataService,EncryptpasswordService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
