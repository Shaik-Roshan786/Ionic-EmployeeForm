import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get',
  templateUrl: './get.page.html',
  styleUrls: ['./get.page.scss'],
})
export class GetPage implements OnInit {
  regForm: any; 
  employees: any=[] 
  constructor() { }

  ngOnInit() {
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

  update (employees:any) { // "update" method that takes "employees" as a parameter
    this.employees=employees // sets the "regForm" property with the "employees" value
    localStorage.setItem('employees',JSON.stringify(employees)) // stores the "employees" data in the localStorage
    window.location.href='/update' //Navigates to '/updatedata' URL:
   }
   remove(Firstname: any) { // Defining a method "remove" that takes "Firstname" as a parameter, sends a DELETE request to 'http://localhost:3000/employeer/deletedata/' + Firstname, and logs the result in the console
    fetch("http://localhost:3000/employeer/deletedata/" + Firstname, { 
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
