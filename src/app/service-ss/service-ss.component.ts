import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-service-ss',
  templateUrl: './service-ss.component.html',
  styleUrls: ['./service-ss.component.css']
})
export class ServiceSSComponent implements OnInit {

  constructor(private s: TestService) { }

  ngOnInit(): void {
  this.s.showmsgOb().subscribe(
    (d)=>{
console.log(d);
    },
    (err)=>{
      console.log(err)
    },
    ()=>{
      
    }
  );
  }

}
