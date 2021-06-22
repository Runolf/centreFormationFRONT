import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormationComponent } from './component/create-formation/create-formation.component';
import { CreateSessionComponent } from './component/create-session/create-session.component';
import { ListFormationComponent } from './component/list-formation/list-formation.component';
import { LoginComponent } from './component/login/login.component';
import { OneFormatComponent } from './component/one-format/one-format.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path: "", component: ListFormationComponent},
  {path : "login", component: LoginComponent},
  {path : "allFormat", component: ListFormationComponent},
  {path: "signup", component: SignupComponent},
  {path: "allFormat/:id", component: OneFormatComponent},
  {path: "createFormation", component: CreateFormationComponent},
  {path: "createSession", component: CreateSessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
