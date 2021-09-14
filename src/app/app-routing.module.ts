import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { CreateComponent } from './create/create.component';
//import { StudentlistComponent } from './studentlist/studentlist.component';
import { LoginComponent } from './login/login.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DisplayComponent } from './display/display.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployComponent } from './update-employ/update-employ.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SignupComponent } from './signup/signup.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { WrongUsernameComponent } from './wrong-username/wrong-username.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  //{path: 'create', component:CreateComponent},
  //{path: 'studentlist', component:StudentlistComponent},
  {path :'create-employee',component:CreateEmployeeComponent},
  {path: 'employee-details/:id',component:EmployeeDetailsComponent},
  {path: 'update-employ/:id',component:UpdateEmployComponent},
  {path: 'welcome',component:WelcomeComponent},

  
 
  {path: 'employee-list',component: EmployeeListComponent},
  {path: 'display', component: DisplayComponent,
children:[
  {path:'create-employee', component: CreateEmployeeComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path: 'update-employ/:id',component: UpdateEmployComponent},
  {path: 'employee-details/:id',component: EmployeeDetailsComponent},
  
  {path: 'employs',component: EmployeeListComponent}
]},
{path: 'login',component:LoginComponent},
{ path: 'home', component: HomeComponent },
{path:'signup', component:SignupComponent},
{path:'userdetails',component:UserdetailsComponent},
{path:'wrong-username', component:WrongUsernameComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
