import { Component, OnInit } from '@angular/core';

import { IUserLogin } from '../shared/interfaces';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.buildForm();
  }
  
  
  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: 'admin',
      password: 'admin'
    });
  }
  
  
  onClickSubmit(value: IUserLogin) {
   this.authService.login(value.email,value.password)
      .subscribe(data => {
        console.log("Is Login Success: " + data);

        if (data) this.router.navigate(['/customers']);
      });
  }
}
