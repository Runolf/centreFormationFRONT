import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListFormationService } from 'src/app/services/list-formation.service';

@Component({
  selector: 'app-one-format',
  templateUrl: './one-format.component.html',
  styleUrls: ['./one-format.component.css']
})
export class OneFormatComponent implements OnInit {

  constructor(  private activatedRoute: ActivatedRoute,
                private formatService : ListFormationService
              ) { }
  data;
  id;
  test;
  formation;

  ngOnInit(): void {
    this.data = this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get("id");
    });

    this.formatService.getOneFormation(this.id).subscribe(response => {
      console.log(response);
      this.formation = response;
    }); 
  }

  registerToSession(){
    //get Id of user but how? 
  }

  /*
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  onBack(): void {
     this._router.navigate(['product']);
  }
  // https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/
  */
}
