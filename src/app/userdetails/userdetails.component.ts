import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.less']
})
export class UserdetailsComponent implements OnInit {
  users: User[]=[];
  id: number=0;
  route: any;
 // user!: User;
  //user: User = new User;

  constructor(private userService: UserService, private router: Router)
   { }

    getUsers(){
    
      this.userService.getUserList().subscribe(data =>{
      this.users = data;
      console.log(this.users);
      });
    }
  // getUserByUsername(){
  //  this.userService.getUserByUsername(this.user).subscribe(data=>{
  //   console.log(data);  
  //  })
  // }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['user'];
    // this.user = new User();
    // this.userService.getUserList(this.id).subscribe(data =>{
    //   this.user[] = data;
    // });
 this.getUsers();
  }

  // employeeDetails(id: number){
  //   this.router.navigate(['employee-details', id]);
  // }
  // updateEmployee(id: number){
  //   this.router.navigate(['update-employ', id]);
  // }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      //this.getUsers();
    })
  }

}
