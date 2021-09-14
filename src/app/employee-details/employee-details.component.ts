import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';
import { ActivatedRoute } from '@angular/router';
//import { EmployService } from '../employ.service';
import { EmployService } from '../service/employ.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.less']
})
export class EmployeeDetailsComponent implements OnInit {
id: number=0;
  employ: Employ = new Employ;

  constructor(private route: ActivatedRoute, private employService: EmployService) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.employ = new Employ();
  this.employService.getEmployById(this.id).subscribe(data =>{
    this.employ = data;
  });
  }

}
