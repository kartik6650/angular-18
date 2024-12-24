import { Routes } from '@angular/router';
import path from 'path';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DependentDropdownComponent } from './dependent-dropdown/dependent-dropdown.component';
import { ContolFlowComponent } from './contol-flow/contol-flow.component';
import { TasksComponent } from './tasks/tasks.component';
import { ApiComponent } from './api/api.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginComponent } from './user-login/login/login.component';
import { RegisterComponent } from './user-login/register/register.component';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './user-login/dashboard/dashboard.component';
// import { authGuard } from './guard/auth.guard';
import { Dashboard2Component } from './user-login/dashboard2/dashboard2.component';


export const routes: Routes = [
    { path: '', component: LoginComponent , pathMatch:'full'},
{
    path:"data-binding",
    component: DataBindingComponent,
},
{
    path: "d-d",
    component: DependentDropdownComponent,
},
{
path: "control-flow",
component: ContolFlowComponent

},
{
path:"tasks", 
component: TasksComponent
},
{
    path: "api",
    component: ApiComponent
},
{
    path: "home",
    component: HomeComponent
},
{
    path: "",
    component: HomeComponent
},
{   
path: "reactive-form",
component : ReactiveFormComponent
},
{   
    path: "login",
    component : LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "map",
        component: MapComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        // canActivate: [authGuard]
    },
    {
        path: "dashboard2",
        component: Dashboard2Component
    }
];
