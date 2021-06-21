import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListFormationService } from 'src/app/services/list-formation.service';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css'],
  providers: [DatePipe]
})
export class ListFormationComponent implements OnInit {

  constructor(private LFS : ListFormationService, public datepipe: DatePipe) { }
  today: Date; 
  data: any;
  oneFormation: any;
  dateForm: FormGroup;
  toSearch: any;
  ngOnChanges(): void{
    console.log("ngOnChanges done");
    this.toSearch = this.data.find(x => console.log(x));
  }

  ngOnInit(): void {
    this.dateForm = new FormGroup(
      {
        "dateToSearch" :  new FormControl(null, Validators.required)
      }
    );
    this.LFS.getAllFormation().subscribe((response) => {
      console.log("response:");
      console.log(response);

      this.data = response;
    });

    this.LFS.getOneFormation(2).subscribe(
      response => {
        console.log(response)
        this.oneFormation = response;
      });

      this.today = new Date();
  }

  onSubmit(){
    console.log("onSubmit form");
    console.log(this.dateForm.value.dateToSearch);
  }
  searchByDate(){
   //let date: string = this.datepipe.transform(this.today, "yyyy-MM-dd");
    console.log(this.datepipe.transform(this.today, "yyyy-MM-dd"));
  }

}
