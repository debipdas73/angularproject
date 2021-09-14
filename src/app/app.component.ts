import { Component } from '@angular/core';
//import { AuthenticationGuard } from 'dist/Project1/app/authentication.guard';
import { AuthguardServiceService } from './service/authguard-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Project1';
  constructor( private _authService: AuthguardServiceService){}
}
