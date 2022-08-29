import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  /* loginForm = new FormGroup({
    email: new FormControl('abc@gmail.com'),
    password: new FormControl('123456')
  }) */

  loginResponse = '';
  loginClass = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  onSubmitHandler() {
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response)
        this.loginResponse = "Login Successful. Thank You!";
        this.loginClass = 'alert-success';
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
        this.router.navigateByUrl('home')
      }, (error) => {
        console.log(error);
        this.loginResponse = "Login Failed. Try Again!";
        this.loginClass = 'alert-danger';
      }
    )
  }

  ngOnInit(): void {
  }

}
