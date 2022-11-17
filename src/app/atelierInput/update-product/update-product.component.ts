import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
@Input()prod:any;
  constructor(private s:ProductService) { }

  ngOnInit(): void {
  }
updateProduct(data:any){
  this.s.updateProduct(data,this.prod.id).subscribe(
    ()=>{
      console.log('updated')
    }
  )
}
}
