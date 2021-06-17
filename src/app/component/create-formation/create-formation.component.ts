import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListFormationService } from 'src/app/services/list-formation.service';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent implements OnInit {
  
  createFormatForm: FormGroup;
  constructor(private formatService: ListFormationService) { }

  ngOnInit(): void {
    this.createFormatForm = new FormGroup({
      "intitule": new FormControl(null, null),
      "duree": new FormControl(null, null),
      "prix": new FormControl(null, null),
      "maxInscription": new FormControl(null, null),
      "minEleve": new FormControl(null, null),
    });
  }

  onSubmit(){
    console.log(this.createFormatForm);

    this.formatService.createFormation(
      this.createFormatForm.value.intitule,
      this.createFormatForm.value.duree ,
      this.createFormatForm.value.prix ,
      this.createFormatForm.value.maxInscription ,
      this.createFormatForm.value.minEleve
    ).subscribe(response => console.log(response));
  }

}
