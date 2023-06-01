import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
  // employeeForm: any;
  regForm: any; // declares a property named "regForm" of any type
  employees: any=[] // declares a property named "employees" as an empty array
  

  constructor(private formBuilder: FormBuilder) { // // defines a constructor that takes an argument "formBuilder" of type FormBuilder
    this.getemployee() // The getemployee() method is called to retrieve the employees' data.
    this.regForm = this.formBuilder.group({ // The FormGroup object is used to create form controls and define their validation rules.
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      Company: ['', Validators.required],
      Location: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
    
  }

  update (employees:any) { // "update" method that takes "employees" as a parameter
    this.employees=employees // sets the "regForm" property with the "employees" value
    localStorage.setItem('employees',JSON.stringify(employees)) // stores the "employees" data in the localStorage
    window.location.href='/update' //Navigates to '/updatedata' URL:
   }
  show() {
    console.log(this.regForm.value);
    fetch("http://localhost:3000/employeer/adddata", { //  defines a constructor that takes an argument "formBuilder" of type FormBuilder
       method:'post',
       headers:{
        "Access-Contol-Allow-Origin": "*",
        "content-Type":'application/json'
       },
       body:JSON.stringify(this.regForm.value)  // converts the form data to JSON string and sets it as the request body
     }).then(res=> res.json()) // converts result into json format
     .then(result=>{ 
       console.log(result) // Displays the Result in Console
     console.log(this.regForm)
    }).catch(err =>
      console.log(err))
  } 

  getemployee() { // Defining a method "getemployee" that sends a GET request to 'http://localhost:3000/employeer/employees' and logs the result in the console, and sets the "employees" property with the fetched data
    fetch("http://localhost:3000/employeer/employees", {
     method:'get',
     headers:{
      "Access-Contol-Allow-Origin": "*",
     },
   }).then(res=> res.json())
   .then(result=>{ 
     console.log(result)
     this.employees=result.employees // this refers to the component itself for which the template was rendered. On the template you can access only members of the component. This means that this is implicitly added to each property which you use in the template. 
   console.log(this.employees)
  }).catch(err =>
    console.log(err))
    }
    remove(Firstname: any) { // Defining a method "remove" that takes "Firstname" as a parameter, sends a DELETE request to 'http://localhost:3000/employeer/deletedata/' + Firstname, and logs the result in the console
      fetch("http://localhost:3000/employeer/deletedata" + Firstname, { 
           method:'delete', // Method Name 
           headers:{
            "Access-Contol-Allow-Origin": "*",
            "content-Type":'application/json'
           },
         }).then(res=> res.json()) // converts result into json format
         .then(result=>{ 
           console.log(result) // Displays the Result in Console
           alert('Employee Data Deleted Succesfully') // Gives An Alert Message With Ok
        }).catch(err => // Display The Error
          console.log(err)) 
       } 
      
    }

  

 
