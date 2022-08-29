import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  public subcategories: any[] = [];
  public products: any[] = [];
  catId = 3;

  constructor(private dataService: DataService) { 
    this.dataService.getSubCategoryByCatId(this.catId).subscribe((data: any) => {
      this.subcategories = data.data
    })
    this.dataService.getProductsByCatId(this.catId).subscribe((data: any) => {
      this.products = data.data
    })
  }

  ngOnInit(): void {
  }

}
