import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : string;
  token : string;
  loginForm : FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email' : new FormControl(null, Validators.required),
      'pass' : new FormControl(null, Validators.required)
    });

    this.login = this.loginService.getLogin(); // get the email
    this.token = this.loginService.getToken();   
  
  }

  onSubmit(){
    console.log(this.loginForm);
    this.loginService.authenticateMe(this.loginForm.value.email, this.loginForm.value.pass).subscribe(response => {
      console.log(response["token"]);
      this.loginService.setToken(this.loginForm.value.login, response["token"]);
      this.login = this.loginService.getLogin();
      this.token = this.loginService.getToken();
    });
  }

  logout(){
    this.loginService.logOut();
    sessionStorage.removeItem("token");
    this.login = null;
    this.token = null;

    location.reload();
  }

  getByEmail(email){
    console.log("getByEmail:");
    let dude; 
    this.loginService.getByEmail("toto@hotmail.com").subscribe(response => {
      console.log(response);
      dude = response;
    });
  }

}
