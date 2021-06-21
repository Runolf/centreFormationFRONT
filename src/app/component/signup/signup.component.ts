import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "email": new FormControl(null, [Validators.email, Validators.required]),
      "nom": new FormControl(null, Validators.required),
      "prenom": new FormControl(null, Validators.required),
      "adresse": new FormControl(null, Validators.required),
      "telephone": new FormControl(null, Validators.required),
      "pass": new FormControl(null, Validators.required) 
    });
  }

  onSubmit(){
    //console.log(this.signupForm);
    this.signupService.signMe(  this.signupForm.value.email, 
                                this.signupForm.value.nom, 
                                this.signupForm.value.prenom, 
                                this.signupForm.value.adresse,
                                this.signupForm.value.telephone,
                                this.signupForm.value.pass
                                ).subscribe(response => console.log(response));
  }

}
