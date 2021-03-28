import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';

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
      'userData':new FormGroup({
        'username':new FormControl(null,Validators.required),
        'email':new FormControl(null,[Validators.required,Validators.email]),
      }),
      'gender':new FormControl('male'),
      // 'hobbies':new FormArray([])
    });
  }

  /* onAddHobby(){
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  } */

  onSubmit(){
    console.log(this.signupForm);
  }

  /* get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  } */
}
