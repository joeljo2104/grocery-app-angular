import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  userModel = new User();

  registerResponse = '';
  registerClass = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onFormSubmit() {
    this.auth.register(this.userModel).subscribe((response) => {
      console.log(response)
      this.router.navigateByUrl('login')
    }, (error) => {
      console.log(error);
      this.registerResponse = JSON.stringify(error.error.message);
      this.registerClass = 'alert-danger';
    })
  }

}
