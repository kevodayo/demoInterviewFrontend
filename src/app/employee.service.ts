import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Account, DepositDetails, Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/accounts";
  private withdawal = "http://localhost:8080/api/v1/accounts/transactions/withdraw";
  private deposit = "http://localhost:8080/api/v1/accounts/transactions/deposit";
  
  constructor(private httpclient: HttpClient) {

  }

  getEmployeesList(): Observable<Employee[]> {

    return this.httpclient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    console.log("Hello david")
    return this.httpclient.post(`${this.baseUrl}`, employee);
  }
  createAccount(account: Account): Observable<Object> {
    return this.httpclient.post<Account[]>(`${this.baseUrl}`, account)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  makeDeposit(deposit: DepositDetails): Observable<Object> {
    return this.httpclient.post<DepositDetails[]>(`${this.deposit}`, deposit)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  makeWithdawal(deposit: DepositDetails): Observable<Object> {
    return this.httpclient.post<DepositDetails[]>(`${this.withdawal}`, deposit)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpclient.get<Employee>(`${this.baseUrl}/${id}`);
  }
  errorHandl(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpclient.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }
}
