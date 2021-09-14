import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wrong-username',
  templateUrl: './wrong-username.component.html',
  styleUrls: ['./wrong-username.component.scss']
})
export class WrongUsernameComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  moveToRegister() {
    this.router.navigate(['../signup'], { relativeTo: this.activatedRoute});
}
moveToLogin(){
  this.router.navigate(['../login'],{
    relativeTo: this.activatedRoute});
  }
  moveToHome(){
    this.router.navigate(['../home'],{
      relativeTo: this.activatedRoute});
  }
}

