import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormateurService } from 'src/app/services/formateur.service';
import { ListFormationService } from 'src/app/services/list-formation.service';
import { LocalService } from 'src/app/services/local.service';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  createSessionForm: FormGroup;
  constructor(private sessionService: SessionsService, 
              private formationService: ListFormationService,
              private locauxService: LocalService,
              private formateurService: FormateurService
              ) {}
  
  
  allForm;
  allFormateur;
  allLocaux;

  ngOnInit(): void {
    this.formationService.getAllFormation().subscribe(response => {
      console.log(response);
      this.allForm = response;
    });

    this.formateurService.getAllFormateur().subscribe(response => {
      console.log(response);
      this.allFormateur = response;
    });

    this.locauxService.getAllLocaux().subscribe(response => {
      console.log(response);
      this.allLocaux = response;
    });

    this.createSessionForm = new FormGroup({
      "startDate": new FormControl(null, null),
      "endDate": new FormControl(null, null),
      "formateurs":new FormControl(null, null),
      "locaux":new FormControl(null, null),
      "formats":  new FormControl(null, null) 
    });
  }

  onSubmit(){
    console.log(this.createSessionForm);
    console.log("idFormation:");
    console.log(this.createSessionForm.value.formats.idFormation);

    console.log("idFormateur:");
    console.log(this.createSessionForm.value.formateurs.idFormateur);

    console.log("idLocaux:");
    console.log(this.createSessionForm.value.locaux.idLocal);

    this.sessionService.createSession(
      this.createSessionForm.value.startDate, 
      this.createSessionForm.value.endDate,
      this.createSessionForm.value.formateurs.idFormateur,
      this.createSessionForm.value.locaux.idLocal,
      this.createSessionForm.value.formats.idFormation
    ).subscribe(response => console.log(response));

  }

}
