import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/usersService/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private userService:UserService,
    private ac:ActivatedRoute,
    private router:Router) { }
id:any;
usersss!:any;
name:any;
surname:any;
  ngOnInit(): void {
   
    this.id=this.ac.snapshot.params['id']
    this.userService.findById(this.id).subscribe(
      (d)=>{
this.usersss=d;
this.name=this.usersss.name;
this.surname=this.usersss.surname;
      }
    );
  }
  updateUser(f:any){
this.userService.updateUser(this.id,f).subscribe(
  ()=>{
this.router.navigate(['userss'])
  }
);
  }
}
