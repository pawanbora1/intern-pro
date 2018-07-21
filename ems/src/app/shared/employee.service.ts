// import { NgModule }         from '@angular/core';
// import { BrowserModule }    from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import { Observable} from 'rxjs';
// import { fromPromise } from 'rxjs';
import { map } from 'rxjs/operators';

// import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';
// @NgModule({
//   imports: [
//     BrowserModule,
//     // import HttpClientModule after BrowserModule.
//     HttpClientModule,
//     map,
//     Observable
//   ]
// })

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL ='http://localhost:3000/employees';

  constructor(public http: HttpClient) { }
  postEmployee(emp: Employee){
    return console.log('Save'), this.http.post(this.baseURL, emp) ;
  }
  getEmployeeList(){
    return this.http.get(this.baseURL);
  }
  putEmployee(emp: Employee){
    return console.log('Updated'),this.http.put(this.baseURL + `/${emp.id}`,emp);
  }
  deleteEmployee(_id: String){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

 
}
