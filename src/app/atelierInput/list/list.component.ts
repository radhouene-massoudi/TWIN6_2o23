import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
products:any;
productBinding:any;
showUpdate=false;
  constructor(private s:ProductService) { }

  ngOnInit(): void {
this.s.fetchProduct().subscribe(
  (data)=>{
    this.products=data;
  }
);

  }
  showUpdateForm(f:any){
    this.productBinding=f;
    this.showUpdate=true;
  }

}
