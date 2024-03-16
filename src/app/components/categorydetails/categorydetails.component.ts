import { Category } from 'src/app/core/interfaces/category';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-categorydetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.scss']
})
export class CategorydetailsComponent implements OnInit {

constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductService:ProductService){}
CategoryId:string|null=''
categoryDetails:Category={} as Category

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.CategoryId=params.get('id');
        }
      })

      this._ProductService.getCategoryDetails(this.CategoryId).subscribe({
        next:(response)=>{
            this.categoryDetails=response.data;
        }
      })
  }


}
