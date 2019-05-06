import { Component, OnInit } from '@angular/core';

import {User} from "../UserModel";

import {
  FormGroup,  Validators, 
   FormControl
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form1',
  templateUrl: './reactive-form1.component.html',
  styleUrls: ['./reactive-form1.component.css']
})
export class ReactiveForm1Component implements OnInit {

  
  signupForm: FormGroup;
  user: User;
  ngOnInit() {
  }

  constructor() {

    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

    save() {
      console.log(this.signupForm);
  
      if (this.signupForm.valid) {
        console.log('firstName is ', this.signupForm.get('firstName').value);
        console.log('Saved: ' + JSON.stringify(this.signupForm.value));
      }
    }
}
