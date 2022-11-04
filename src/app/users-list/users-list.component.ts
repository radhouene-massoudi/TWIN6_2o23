import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private s:ProductService) { }

  ngOnInit(): void {
    this.s.fetchProduct().subscribe(
      (u)=>{
        console.log(u);
      },
      (err)=>{
        console.log(err.status)
      }
    );
  }

}
