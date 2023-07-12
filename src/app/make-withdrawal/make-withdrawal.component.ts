import { Component, OnInit } from '@angular/core';
import { DepositDetails } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-withdrawal',
  templateUrl: './make-withdrawal.component.html',
  styleUrls: ['./make-withdrawal.component.css']
})
export class MakeWithdrawalComponent implements OnInit{
  
  deposit: DepositDetails = new DepositDetails();
  constructor (private employeeservice: EmployeeService, private router: Router){}
  ngOnInit(): void {
  }
  makeWithdrawal(){
    this.employeeservice.makeWithdawal(this.deposit).subscribe(data =>{
      console.log(data);
    },
      error => console.log("There is an error"));
  }
}
