import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import {  Product } from 'src/app/core/interfaces/product';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interfaces/category';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CuttextPipe,CarouselModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

constructor(private _ProductService:ProductService,
  private _CartService:CartService,
  private _ToastrService:ToastrService,
  private _Renderer2:Renderer2,
  ){}

products:Product[]=[];
categories:Category[]=[];

  ngOnInit(): void {
    this._ProductService.getproducts().subscribe({
      next:(response)=>{
       
        this.products=response.data;
        
      }
    })
      this._ProductService.getCategories().subscribe({
        next:(response)=>{
        
          this.categories=response.data;
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

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:1000,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:1000,
    navText: ['prev', 'next'],
    items:1,
    nav: false
  }
}


