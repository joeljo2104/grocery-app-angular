import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  subCategories: any[] = [];
  catId: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');

    this.dataService.getSubCategoryByCatId(this.catId).subscribe((data: any) => {
      this.subCategories = data.data
    })
  }

  ngOnInit(): void {
  }

  onClickHandler(subId:any){
    this.router.navigate(['products', subId])
  }
}
