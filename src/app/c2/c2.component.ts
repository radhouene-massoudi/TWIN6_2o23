import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  providers:[TestService]
})
export class C2Component implements OnInit {
t:any
  constructor(public s:TestService) {
    this.t=this.s.tab;
   }

  ngOnInit(): void {
  }
addtotab(){
  this.s.addelement('twin esprit');
  this.s.showTab();

}
}
