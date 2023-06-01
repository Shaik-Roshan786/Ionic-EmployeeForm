import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  regForm : any;
  data: any;
  localdata: any;
  constructor(private service:UpdateService) {

   }

  ngOnInit(): void {
    this.localdata=JSON.parse(localStorage.getItem('employees') || '{}'); // used to retrieve the value associated with the key 'myData' from the localStorage object & parsed value is then assigned to the localdata variable
    console.log(this.localdata)   
  }
  update(Firstname: any) { // This is a function named update that takes a parameter Firstname of type any.
    localStorage.setItem('employees',JSON.stringify(this.localdata))
    fetch("http://localhost:3000/employeer/updatedata/" + Firstname, { //fetch API to make an HTTP request to the URL with the Firstname parameter appended to the URL
         method:'PUT', // Method Name 
         headers:{
          // "Access-Contol-Allow-Origin": "*", // allows cross-origin requests from any origin (indicated by "*")
          "content-Type":'application/json'
         },
         
         body: JSON.stringify(this.localdata) // Pass the updated data in the request body
       })
       .then(res=> res.json()) // converts result into json format
       .then(result=>{ 
         console.log(result) // Displays the Result in Console
         alert('Changes Updated Succesfully')
         window.location.href='./employee' // Gives An Alert Message With Ok
      })
      .catch(err => // Display The Error
        console.log(err)) 
     } 

}
