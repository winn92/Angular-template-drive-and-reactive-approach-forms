import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './reactive-approach.components.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  genders = ['male', 'female'];
  signupForm:FormGroup;

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'username':new FormControl(null),
      'email':new FormControl(null),
      'gender':new FormControl('male'),
    });
  }
}
