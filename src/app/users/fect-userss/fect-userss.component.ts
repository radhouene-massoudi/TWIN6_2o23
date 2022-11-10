import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/usersService/user.service';

@Component({
  selector: 'app-fect-userss',
  templateUrl: './fect-userss.component.html',
  styleUrls: ['./fect-userss.component.css']
})
export class FectUserssComponent implements OnInit {
users:any;
  constructor(private usersService:UserService) { }

  ngOnInit(): void {
    this.usersService.fetchUsers().subscribe(
      (d)=>{
        console.log(d);
this.users=d;
      }
    )
  }

}
