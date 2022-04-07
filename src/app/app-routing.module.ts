import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"purchase",component:PurchaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
