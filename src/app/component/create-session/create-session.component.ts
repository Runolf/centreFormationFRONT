import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListFormationService } from 'src/app/services/list-formation.service';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  createSessionForm: FormGroup;
  constructor(private sessionService: SessionsService, private formationService: ListFormationService) { }
  allForm = ['test', 'miss', 'you']; 

  ngOnInit(): void {
    //this.allForm = this.formationService.getAllFormation().subscribe(response => console.log(response));
    console.log(this.allForm);
    this.createSessionForm = new FormGroup({
      "startDate": new FormControl(null, null),
      "endDate": new FormControl(null, null),
      "idFormateur":new FormControl(null, null),
      "idLocal":new FormControl(null, null),
      "idFormation": new FormControl(null, null),
      "allFormat": new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.createSessionForm);

    this.sessionService.createSession(
      this.createSessionForm.value.startDate, 
      this.createSessionForm.value.endDate,
      this.createSessionForm.value.idFormateur,
      this.createSessionForm.value.idLocal,
      this.createSessionForm.value.idFormation
    ).subscribe(response => console.log(response));
  }

}
