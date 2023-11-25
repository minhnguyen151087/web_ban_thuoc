import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/services/authorService';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name = 'Sign Up';
  LoginForm: FormGroup;
  submitted = false;
  isTextFieldType: boolean;
  valuedate;
  constructor(
    private fb: FormBuilder,
    public service: AuthorService,
    public router: Router
  ) {
    this.LoginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repassword: new FormControl('', repassword)
    });
    this.valuedate = this.LoginForm.value;
    console.log(this.valuedate);
  }

  ngOnInit() {}
  get f() {
    return this.LoginForm.controls;
  }
  onSubmit() {
    console.log("ok",this.LoginForm.value)
    this.submitted = true;
    // stop here if form is invalid
    if (this.LoginForm.invalid) {
      return;
    }

    let add = new Login();
    add.username = this.LoginForm.controls.username.value;
    add.password = this.LoginForm.controls.password.value;
    console.log('something' + add);

    this.service.login(add).subscribe(res => {
      // this.service.UserName = res.UserName;
      console.log(res)
      this.router.navigate(['/']);
    });
  }
  showhide() {
    this.isTextFieldType = !this.isTextFieldType;
  }
}
function repassword(control: AbstractControl): ValidationErrors {
  if (control.parent != undefined) {
    var password: string = control.parent.get('password').value;
    var cpassword: string = control.parent.get('repassword').value;
    if (password !== cpassword) {
      return { matchPassword: true };
    }
  }
  return null;
}
export class Login {
  username: any;
  password: any;
  rememberme:any;
  constructor() {}
}
