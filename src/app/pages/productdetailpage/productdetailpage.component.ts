import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetailpage',
  templateUrl: './productdetailpage.component.html',
  styleUrls: ['./productdetailpage.component.css']
})
export class ProductdetailpageComponent implements OnInit {

  public product: any;
  public id: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { 

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.dataService.getProductById(this.id).subscribe((data: any) => {
      this.product = data.data
    })
  }

  ngOnInit(): void {
  }

}
