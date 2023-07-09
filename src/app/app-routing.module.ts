import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopComponent} from './shop/shop.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'shop',component:ShopComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRountings=[
  ShopComponent,
  LoginComponent,
  AboutComponent,
  ContactComponent,
  RegisterComponent
]
