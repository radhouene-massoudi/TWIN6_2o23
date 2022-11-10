import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/usersService/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private userService:UserService,
    private ac:ActivatedRoute,
    private router:Router) { }
id:any;
  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];
    this.userService.
    removeUser(this.id)
    .subscribe(
()=>{
this.router.navigate(['userss'])
},
(err)=>{console.log(err)}
    );

  }

}
