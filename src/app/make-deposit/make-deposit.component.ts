import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { DepositDetails } from '../employee';

@Component({
  selector: 'app-make-deposit',
  templateUrl: './make-deposit.component.html',
  styleUrls: ['./make-deposit.component.css']
})
export class MakeDepositComponent implements OnInit{

  deposit: DepositDetails = new DepositDetails();
  constructor (private employeeservice: EmployeeService, private router: Router){}
  ngOnInit(): void {
  }
  makeDeposit(){
    this.employeeservice.makeDeposit(this.deposit).subscribe(data =>{
      console.log(data);
    },
      error => console.log("There is an error"));
  }
}
