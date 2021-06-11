import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  manufactureForm!: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    public api: ApiService
    ) { }
    
    ngOnInit(): void {
      this.manufactureForm = this.formBuilder.group({
        ManufacturerName: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        Email: new FormControl('',[Validators.required, Validators.minLength(5), Validators.email]),
        Password: new FormControl('',[Validators.required, Validators.minLength(5)])
      });
  }

  get getControl(){
    return this.manufactureForm.controls;
  }

  GetGreeting(){
    return this.api.GetHello().subscribe(res => {
      let r = res;
      alert(r);
    })
  }
  name : any = {
    "name" : "Harold"
  }
  PostName(){
    return this.api.PostName(this.name).subscribe(res => {
      let r = res;
      alert(r);
    })
  }
}
