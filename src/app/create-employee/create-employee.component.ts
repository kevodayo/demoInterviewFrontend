import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account, Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{
  
  employee: Employee = new Employee();
  account: Account = new Account();

  constructor (private employeeservice: EmployeeService, private router: Router){}

  ngOnInit(): void {
    
  }

  saveEmployee (){
    this.employeeservice.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
    },
      error => console.log("There is an error"));
  }
  saveAccount(){
    this.employeeservice.createAccount(this.account).subscribe(data =>{
      console.log(data);
    },
      error => console.log("There is an error"));
  }
  goToEmployeeList (){
    this.router.navigate(['/employees']);
  }

  onSubmit (){
    //console.log(this.employee)
    this.saveAccount();
  }

}
