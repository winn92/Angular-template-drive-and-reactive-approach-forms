import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './reactive-approach.components.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  signupForm:FormGroup;
}
