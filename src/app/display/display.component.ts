import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.less']
})
export class DisplayComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.authentocationService.logout();
    //this.router.navigate(['login']);
  }
  moveToProfile(){
    this.router.navigate(['../userdetails'], { relativeTo: this.activatedRoute});
  }
  onLogout(){
    
  }
  

}
