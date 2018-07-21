import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';

// import { Button } from '../../../node_modules/protractor';

// import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

 
   public editEmployee = {
     _id:'',
     id: null,
     name:'',
     position: '',
     office: '',
     salary: null
   }
  constructor(public employeeService: EmployeeService) {
   }
  id:number;
  name:string;
  position:string;
  office:string;
  salary:number;
  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = {
        id:null,
        name: "",
        position:"",
        office:"",
        salary:null
      }
    }
  }
  onSubmit(form: NgForm){
    if(this.editEmployee._id==''){
    this.employeeService.postEmployee(this.editEmployee).subscribe((res)=>{
      this.mymodalSubmit();
      this.refreshEmployeeList();
      this.resetForm(form);
    });
  }
  else {
    this.employeeService.putEmployee(this.editEmployee).subscribe((res)=>{
      this.mymodal();
      this.refreshEmployeeList();
      this.resetForm(form);
    });
  }
}

  refreshEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((res)=>{
      this.employeeService.employees = res as Employee[];
    });
  }
 
  onEdit(emp: any){

   this.employeeService.selectedEmployee = emp;
   this.editEmployee = emp;
  
  }
  onDelete(_id: String, form: NgForm){
    if(confirm('Are you sure to delete this record?')== true){
      this.employeeService.deleteEmployee(_id).subscribe((res)=>{
        this.refreshEmployeeList();
        this.resetForm(form);
      });
    }
  }
  setPosition(event: any){
    this.editEmployee.position = event.target.value;
  }
  mymodal(){
    alert('updated successfully');
  }
  mymodalSubmit(){
    alert('Saved successfully');
  }



}
