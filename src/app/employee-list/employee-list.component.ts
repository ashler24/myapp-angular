import { Component, OnInit } from '@angular/core';

import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 
  emps : any;
  constructor(private service:EmployeeserviceService) { }

  ngOnInit() 
  {
    this.service.getEmployees().subscribe(result=>{
      this.emps=result;
    })
  }

}
