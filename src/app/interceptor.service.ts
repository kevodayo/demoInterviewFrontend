import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    console.log("intercepted")
   const newRequest = req.clone({headers: req.headers.set('authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmeWJxWGFpd0xwWlI0R0VEUDRRaUI2ajMxeERvNkVLak11T182cUJmNjFnIn0.eyJleHAiOjE2NzU5MDk5MjAsImlhdCI6MTY3NTkwOTYyMCwianRpIjoiYTBkNjlmOTEtNjFmYi00Mjc4LWJkZmEtNzgxNDBiYTYzN2Q4IiwiaXNzIjoiaHR0cDovLzEwLjE3Ni4xOC4yMTE6ODE4MS9yZWFsbXMvdHVybnF1ZXN0LXZlcnNpb24tc2l4IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjdkOTFiMWJiLWNkMTUtNDQwMC05MjgwLWMxZTQ0MGRhYzhlNSIsInR5cCI6IkJlYXJlciIsImF6cCI6InR1cm5xdWVzdC12ZXJzaW9uLTYtYXBpcyIsInNlc3Npb25fc3RhdGUiOiIzZTJmN2E5MC1mNWNkLTQ2NzctYjdjZS00N2VlYmE0MDFlYzYiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtdHVybnF1ZXN0LWdpcyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJBRE1JTiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6IjNlMmY3YTkwLWY1Y2QtNDY3Ny1iN2NlLTQ3ZWViYTQwMWVjNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiQ2hyaXN0b3BoZXIgT3RpZW5vIiwicHJlZmVycmVkX3VzZXJuYW1lIjoib3RpZW5vY2hyaXMiLCJnaXZlbl9uYW1lIjoiQ2hyaXN0b3BoZXIiLCJmYW1pbHlfbmFtZSI6Ik90aWVubyIsImVtYWlsIjoiY2hyaXN0b3BoZXIub3RpZW5vQHR1cm5rZXlhZnJpY2EuY29tIiwidXNlcm5hbWUiOiJvdGllbm9jaHJpcyJ9.SsncJuOCxNOMzxm4ZQkiwlt7uzzMZPUYmpqxS6A6RyrSRpWk3ABWIdW5MZebuKeDcTPlNyPGnoCAzYRczK1GQ5LMfBA5cIgSmZij7A3qBDkMgcWmxu32yJVNyqDlsaMkqMC9yqgKOq1vnJLwxi1csvv7vx7XOQMslijM1YKjfrhwdGHAkideWIeTYxapr0V_mtS8XakRCy4K4ZfgOXRrpi3oAWiXnrS1dlxWNOB9bSHg5ZAezOXzpoI-_VtCYKMuU-1aOwPhgRo-M9L-yr8Pn8y3NziMyFMylUDL0SnO2-07IzyFX2AvM8rjG5Es3cWxRySylyIV7EHEFgvZ6n4caA')})

    return next.handle(newRequest);
  }
}
