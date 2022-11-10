import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/usersService/user.service';

@Component({
  selector: 'app-add-userss',
  templateUrl: './add-userss.component.html',
  styleUrls: ['./add-userss.component.css']
})
export class AddUserssComponent implements OnInit {

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    
  }
  addUser(f:any){
this.userService.addUser(f).subscribe(
  ()=>{
    this.router.navigate(['userss'])

  }
)
  }

}
