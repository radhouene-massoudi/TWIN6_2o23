import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-showone-product',
  templateUrl: './showone-product.component.html',
  styleUrls: ['./showone-product.component.css']
})
export class ShowoneProductComponent implements OnInit,OnChanges {
@Input()product:any;
@Input()khalil='';

class='4TWIN6 is the best ,dfksdnf:sdf!mdfdsfmsd';
  constructor() { }

  ngOnInit(): void {
  }
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
}
}
