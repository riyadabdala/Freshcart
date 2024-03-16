import { Product } from 'src/app/core/interfaces/product';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {
  products:Product[]=[];
  pageSize:number=0;
  currentPage:number=1;
  total:number=0;


constructor(
  private _ProductService:ProductService,
  private _CartService:CartService,
  private _ToastrService:ToastrService,
  private _Renderer2:Renderer2,
){}

  ngOnInit(): void {
    this._ProductService.getproducts().subscribe({
      next:(response)=>{
       
       this.products=response.data;
       this.pageSize=response.metadata.limit;
       this.currentPage=response.metadata.currentPage;
        this.total=response.results;
      }
    })
  }
   
  addProduct(id:any,element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element,'disabled','true');

    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
      
        this._ToastrService.success(response.message)
        this._Renderer2.removeAttribute(element,'disabled');

        this._CartService.cartNumber.next(response.numOfCartItems)
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element,'disabled')
      }
    })
  }

  pageChanged(event:any):void{
    this._ProductService.getproducts(event).subscribe({
      next:(response)=>{
       
       this.products=response.data;
       this.pageSize=response.metadata.limit;
       this.currentPage=response.metadata.currentPage;
        this.total=response.results;
      }
    })
  }

}
