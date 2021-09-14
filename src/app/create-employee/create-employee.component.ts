import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';

import { ActivatedRoute, Router } from '@angular/router';
import { EmployService } from '../service/employ.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  formGroup!: FormGroup;
  message: string;
  sto = false;
  employ: Employ = new Employ();

  //constructor(private employService: EmployService, private router: Router) { }
  
  isFormValid = true;

constructor(private employService: EmployService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.message = '';
    }

  // ngOnInit(): void {
  // }
  ngOnInit() {
    // this.formGroup = new FormGroup({
    //   Emailid: new FormControl('', [
    //     Validators.required,
        //Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
     // ])
       
    //});
  }
  saveEmploy(){
    this.employService.createEmploy(this.employ).subscribe(data =>{
      console.log(data);
      this.goToEmployList();
    }, error => console.log(error));
  }

  goToEmployList(){
    this.router.navigate(['/display/employee-list']);
  }

  onSubmit(){
    console.log(this.employ);
    this.saveEmploy();
  }
}
























// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-create-employee',
//   templateUrl: './create-employee.component.html',
//   styleUrls: ['./create-employee.component.less']
// })
// export class CreateEmployeeComponent implements OnInit {

//   formGroup!: FormGroup;
//   message: string;
//   sto = false;
//   // public register: Register[] = [];

//   isFormValid = true;

// constructor(private router: Router, private activatedRoute: ActivatedRoute) {
//     this.message = '';
//     }
//    ngOnInit() {
//      this.formGroup = new FormGroup({
       
    
//        Id: new FormControl('', [
//          Validators.required,
//          //Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
//        ]),
   
//        EmailId: new FormControl('', [
//          Validators.required,
//         // Validators.minLength(8),
//          //Validators.maxLength(20)
//        ]),
//        FirstName: new FormControl('', [
//         Validators.required
//       ]),
//       LastName: new FormControl('', [
//         Validators.required,
//        // Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
//       ]),
//      });
//    }
//     onSubmit() {
//      console.log(this.formGroup);
//      this.isFormValid = true;
//      if (this.isFormValid) {
//     /* const user = {
//        username: this.formGroup.value('Username'), // Username input field
//        password: this.formGroup.value('Password') // Password input field
//      };*/
//      console.log('Form valid');
//     // console.log(user.username + '  ' + user.password );
//      console.log('Formgroup value :' + this.formGroup.value);
//      this.router.navigate(['/employee-list']);
//      }

//     }

//    onReset() {
//      this.formGroup.reset();
//    }

  //  isValid(controlName) {
  //   return this.formGroup.get(controlName).invalid && this.formGroup.get(controlName).touched;
  //  }

// moveToRegister() {
//     this.router.navigate(['../create-employee'], { relativeTo: this.activatedRoute});
// }

//}
