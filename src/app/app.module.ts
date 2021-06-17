import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFormationComponent } from './component/list-formation/list-formation.component';
import { InterceptorService } from './interceptor/interceptor.service';
import { LoginComponent } from './component/login/login.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './component/signup/signup.component';
import { OneFormatComponent } from './component/one-format/one-format.component';
import { CreateFormationComponent } from './component/create-formation/create-formation.component';
import { CreateSessionComponent } from './component/create-session/create-session.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFormationComponent,
    LoginComponent,
    MenuComponent,
    SignupComponent,
    OneFormatComponent,
    CreateFormationComponent,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
