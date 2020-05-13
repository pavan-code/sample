import { Component, OnInit } from '@angular/core';
import { DETAILS } from '../shared/studentsData'
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  constructor(private fb: FormBuilder) { }
  
  isDisabled = true;
  student = DETAILS[1];  
  change() {
    this.isDisabled = false;
  }

  // get username() {
  //   return this.regForm.get('username')
  // }
  // get password() {
  //   return this.regForm.get('password') 
  // }
  // get cpassword() {
  //   return this.regForm.get('cPassword')
  // }
  
  // regForm = this.fb.group({
  //   username: ['',[Validators.required, Validators.minLength(3)]],
  //   password: ['', [Validators.required, Validators.minLength(8)]],
  //   cPassword: [],
  //   address: this.fb.group({
  //     city: [], 
  //     state: [],
  //     code: []
  //   })
  // });
}
