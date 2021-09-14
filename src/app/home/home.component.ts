import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
   templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
 
  //Name:string="";
  searchText=" ";
  id=null;
 public hdate=new Date();
//  public Name='devil';
//  public message='welcome to techmahindra';
 public characters=['Admin','User','Guest'];

//  public person={
//    fname:'radhe',
//    lname:'krishna'
//  };
//  public val=5.678;
  @Input() greetMessage!: string;
  @Output() valueChange=new EventEmitter();
  // public designation =["Admin","User","Guest"];

  public designation1=["Admin"];
 
  counter=0;
  valueChanged(){
    this.counter=this.counter + 1;
    this.valueChange.emit(this.counter);
    
  }
  constructor() { }
  name="Debiprasad das";
  ngOnInit(): void {
  }

}
