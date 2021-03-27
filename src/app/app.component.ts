import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  // @ViewChild('username') usernameInput:NgModel;
  defaultQuestion="pet";
  answer="";
  genders=['male','female'];
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
  
  suggestUserName(){
    const suggestedName='Superuser';
    // this.usernameInput.control.setValue(suggestedName);
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // })
    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }

  onSubmit(){
    console.log(this.signupForm);
  }
}
