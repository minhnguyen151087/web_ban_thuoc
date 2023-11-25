import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/authorService';
@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name = 'Sign Up';
  RegisterForm: FormGroup;
  submitted = false;
  isTextFieldType: boolean;
  valuedate;
  constructor(
    private fb: FormBuilder,
    public service: AuthorService,
    public router: Router
  ) {
    this.RegisterForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repassword: new FormControl('', repassword)
    });
    this.valuedate = this.RegisterForm.value;
    console.log(this.valuedate);
  }

  ngOnInit() {}
  get f() {
    return this.RegisterForm.controls;
  }
  onSubmit() {
    console.log("ok",this.RegisterForm.value)
    this.submitted = true;
    // stop here if form is invalid
    if (this.RegisterForm.invalid) {
      return;
    }

    let add = new Register();
    add.username = this.RegisterForm.controls.username.value;
    add.password = this.RegisterForm.controls.password.value;
    console.log('something' + add);

    this.service.postuser(add).subscribe(res => {
      this.service.UserName = res.UserName;
      this.router.navigate(['/register']);
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
export class Register {
  username: any;
  password: any;
  constructor() {}
}