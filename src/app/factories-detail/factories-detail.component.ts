import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-factories-detail',
  templateUrl: './factories-detail.component.html',
  styleUrls: ['./factories-detail.component.css']
})
export class FactoriesDetailComponent implements OnInit {
  detailForm!: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder
    ) { }
    
    ngOnInit(): void {
      this.detailForm = this.formBuilder.group({
        MainFactory: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        AlternateFactory: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        CorporateAddress: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        Phone: new FormControl(''),
        RFC: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        CorporateEmail: new FormControl('',[Validators.required, Validators.minLength(5), Validators.email]),
      });
  }

  get getControl(){
    return this.detailForm.controls;
  }

}
