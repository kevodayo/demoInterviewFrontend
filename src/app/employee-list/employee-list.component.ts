import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  constructor(private employeeservice: EmployeeService, private router: Router) { }

  ngOnInit(): void {

    // this.employees = [
    //   {
    //     'id': 1,
    //     'firstName': 'Kevine',
    //     'lastName': 'Oyanda',
    //     'emailId': 'kevo@gmail.com'
    //   },
    //   {
    //     'id': 2,
    //     'firstName': 'Austine',
    //     'lastName': 'Oyanda',
    //     'emailId': 'aus@gmail.com'
    //   }
    // ]
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeservice.getEmployeesList().subscribe(data =>{
      this.employees = data;
    })
  }
  updateEmployee (id: number){
    this.router.navigate(['update-employee', id]);
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  deleteEmployee(id: number){
    this.employeeservice.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
