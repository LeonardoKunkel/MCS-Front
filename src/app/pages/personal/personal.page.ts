import { Component, OnInit } from '@angular/core';
import { PersonalServiceService } from '../../services/personal-service.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
  personal:any[]=[];

  constructor( private personalServiceDb : PersonalServiceService) {
    this.getDbPersonal();
   }

  ngOnInit() {
  }

  getDbPersonal(){
    this.personalServiceDb.getPersonal().subscribe((data:any) =>{
      this.personal = data.newPersonal;
      //console.log(data.newPersonal);
    });
  }

}
