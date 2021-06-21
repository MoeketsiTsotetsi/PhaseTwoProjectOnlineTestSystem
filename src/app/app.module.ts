import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TestsComponent } from './tests/tests.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { applicationRoutes } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    MainComponent,
    RegisterComponent,
    LoginComponent,
    TestsComponent,
    ContactComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
