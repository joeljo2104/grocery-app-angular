import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories: any[] = [];

  constructor(private dataService: DataService, private router: Router) { 
    this.dataService.getCategories().subscribe((data: any) => {
      this.categories = data.data
    })
  }

  ngOnInit(): void {
  }

  onClickHandler(catId:any){
    this.router.navigate(['products', catId])
  }

}
