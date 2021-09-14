import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardServiceService } from '../service/authguard-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  constructor(private authentocationService: AuthguardServiceService,private router: Router) { }

  ngOnInit() {
   // this.authentocationService.logout();
    //this.router.navigate(['login']);
  }

}
