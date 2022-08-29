import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public categories: any[] = [];

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getCategories().subscribe((data: any) => {
      this.categories = data.data
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl('login')
  }

  ngOnInit(): void {
  }

}
