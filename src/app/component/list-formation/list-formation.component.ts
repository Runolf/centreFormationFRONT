import { Component, OnInit } from '@angular/core';
import { ListFormationService } from 'src/app/services/list-formation.service';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css']
})
export class ListFormationComponent implements OnInit {

  constructor(private LFS : ListFormationService) { }

  data: any;
  oneFormation: any;


  ngOnInit(): void {
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
  }

}
