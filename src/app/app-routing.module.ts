import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { TestsComponent } from "./tests/tests.component";

export const applicationRoutes:Routes =[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'tests',component:TestsComponent},
    {path:'register',component:RegisterComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent}

]