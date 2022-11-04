import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test2Service } from './test2.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
tab=[
  'ali',
  'twin',
  'twin6 is the best'
]
  constructor() { }
showMsg(){
  console.log("bonjour")
}
showTab(){
  console.log(this.tab);
}
addelement(d:any){
  this.tab.push(d);
  //console.log(this.tab);
 // this.sho
}
showmsgOb(){
  return new Observable(
    ()=>{
      console.log('test obs')
    }
  );

}
}
