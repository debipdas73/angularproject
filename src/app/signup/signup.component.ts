import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroupSignup!: FormGroup;
  submitted=false;
  message: string;
  sto = false;
  user: User = new User();
   //user='';
  //constructor(private employService: EmployService, private router: Router) { }
  
  isFormValid = true;

constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.message = '';
    }

  // ngOnInit(): void {
  // }
  ngOnInit() {
     this.formGroupSignup = this.formBuilder.group({
       Name: new FormControl('', [
        Validators.required,
      ]),
     
     
       Emailid: new FormControl('', [
        Validators.required,
  //      // Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
     ]),
     
     Username: new FormControl('', [
         Validators.required,
  //       //Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
     
       Password: new FormControl('', [
         Validators.required,
         Validators.minLength(5),
          Validators.maxLength(20),
  //      // Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ])
       
    });

    // this.formGroup = new FormGroup({
    //   UserName: new formGroup('', [
    //     Validators.required,
     
    //    //Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)
    //   ]),
    //   Password: new FormControl('', [
    //    Validators.required,
    //     Validators.minLength(4),
    //     Validators.maxLength(20)
    //   ])
     //});
  }
  saveUser(){
    this.userService.createUser(this.user).subscribe(data =>{
      console.log(data);
      this.goToUserList();
    }, error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
     console.log(this.formGroupSignup);
     this.isFormValid=true;
  
     this.router.navigate(['/login']);
    
     //this.router.navigate(['/signup']);
    console.log(this.user);
    this.saveUser();
  }

}





