// tslint:disable:typedef
// tslint:disable:prefer-const
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/users.model';

import {AuthModel, MenuLoginModel, UserInfo} from '../../shared/model/auth.module';
import {AuthorService} from '../../services/authorService';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name = 'Sign Up';
  LoginForm: FormGroup;
  submitted = false;
  messageError: string;
  isTextFieldType: boolean;
  valueDate;
  auth: AuthModel;
  userInfo: UserInfo;
  menu: MenuLoginModel;
  constructor(private fb: FormBuilder, public service: AuthorService, public router: Router) {
    this.LoginForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      // repassword: new FormControl('', repassword)
    });
    this.valueDate = this.LoginForm.value;
    console.log(this.valueDate);
  }

  ngOnInit() {}
  get f() {
    return this.LoginForm.controls;
  }

  onSubmit() {
    console.log('oke', this.LoginForm.value);
    this.submitted = true;
    if (this.LoginForm.invalid) {
      this.service.login(this.LoginForm.value).subscribe( res => {
        if (res !== null){
          this.userInfo = res.userInfo;
          this.menu = res.menuList;
          localStorage.setItem( 'Token', res.Token);
          localStorage.setItem('UserInfo', JSON.stringify(this.userInfo));
          localStorage.setItem('Menu', JSON.stringify(this.menu));
          localStorage.setItem('Role', JSON.stringify(this.userInfo.roles));
          this.auth = res;
          this.router.navigate(['/home']);
        }
      }, error => {
        this.messageError = 'Tài khoản đăng nhập không đúng';
      });
    }

    // const add = new Login();
    // add.username = this.LoginForm.controls.username.value;
    // add.password = this.LoginForm.controls.password.value;
    // console.log('something' + add);
    //
    // this.service.login(add).subscribe(res => {
    //   this.userInfo = res.userInfo;
    //   console.log(res);
    //   this.router.navigate(['/home']);
    // });
  }
  showhide() {
    this.isTextFieldType = !this.isTextFieldType;
  }
}
// function repassword(control: AbstractControl): ValidationErrors {
//   if (control.parent !== undefined) {
//     const password: string = control.parent.get('password').value;
//     const cpassword: string = control.parent.get('repassword').value;
//     if (password !== cpassword) {
//       return { matchPassword: true };
//     }
//   }
//   return null;
// }
export class Login {
  username: any;
  password: any;
  rememberme: any;
  constructor() {}
}
