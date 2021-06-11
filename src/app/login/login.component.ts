import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;

  constructor(public formBuilder : FormBuilder ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Username: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      Password: new FormControl('',[Validators.required, Validators.minLength(5)])
    });
  }

  get getControl(){
    return this.loginForm.controls;
  }

}
