import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthguardServiceService } from './service/authguard-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directive/highlight.directive';
import { ArrangeorderPipe } from './pipes/arrangeorder.pipe';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';

import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
//import { UpdateEmployComponent } from './update-employ/update-employ.component';
import { UpdateEmployComponent } from './update-employ/update-employ.component';
import { SignupComponent } from './signup/signup.component';
import { EmployComponent } from './employ/employ.component';
//import { Employ } from './employ';
import { EmployService } from './service/employ.service';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { WrongUsernameComponent } from './wrong-username/wrong-username.component';
import { WelcomeComponent } from './welcome/welcome.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    StudentlistComponent,
    HighlightDirective,
    ArrangeorderPipe,
    SortPipe,
    FilterPipe,
    CreateEmployeeComponent,
    EmployeeListComponent,
    DisplayComponent,
    LoginComponent,
    EmployeeDetailsComponent,
    UpdateEmployComponent,
    SignupComponent,
    EmployComponent,
    LogoutComponent,
    UserdetailsComponent,
    WrongUsernameComponent,
    WelcomeComponent,
   
    
  
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployService,AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
