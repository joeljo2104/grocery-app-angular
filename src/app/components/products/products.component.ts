import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any [] = [];
  catId: any;
  subId: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) { 

    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');

    this.dataService.getProductsByCatId(this.catId).subscribe((data: any) => {
      this.products = data.data
    })

    this.dataService.getProductsBySubId(this.subId).subscribe((data: any) => {
      this.products = data.data
    })
  }

  ngOnInit(): void {
  }

  onButtonClicked(id : string) {
    this.router.navigate(['product-detail', id ])
  }
}
