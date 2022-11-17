import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ShowoneProductComponent } from '../showone-product/showone-product.component';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit,AfterViewInit {
  @ViewChild(ShowoneProductComponent)test!:ShowoneProductComponent;
  listProdcut=[
    {id: 1, title: "mobile", price: 18, quantity: 0, like: 0},
    {id: 2, title: "mobile 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "mobile 3", price: 16, quantity: 8, like: 0}, ];
  constructor() { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(): void {
    console.log(this.test.class);
  }

}
