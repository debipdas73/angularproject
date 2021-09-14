import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.less']
})
export class StudentlistComponent implements OnInit {
 student:{
  rollno:number;
  name:string;
  course:string;
  city:string;
  percentage:number;
 }[]=[];
 ngOnInit(){
  this.student = this.getStudents(); }
 addStudent(){
   console.log('Add student');
 }
 getStudents(){
   return[
{rollno:100,name:"debiprasad",course:"B.tech",city:"chennai",percentage:90}
   ]
 }
  constructor() { }

  
  // ngOnInit(): void {
  
  // }

}
