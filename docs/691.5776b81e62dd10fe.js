"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[691],{9691:(f,_,o)=>{o.r(_),o.d(_,{DetailsComponent:()=>v});var n=o(6814),a=o(756),t=o(4769),d=o(7163),l=o(0),p=o(6286),m=o(2425);function g(s,u){if(1&s&&t._UZ(0,"img",16),2&s){const e=t.oxw(3);t.Q6J("src",e.productDetails.imageCover,t.LSH)}}function D(s,u){1&s&&(t.ynx(0),t.YNc(1,g,1,1,"ng-template",15),t.BQk())}function h(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),t.YNc(4,D,2,0,"ng-container",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div")(7,"h2",7),t._uU(8),t.qZA(),t.TgZ(9,"p",8),t._uU(10),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA(),t.TgZ(13,"div",9)(14,"span",10),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"p",11),t._UZ(18,"i",12),t._uU(19),t.qZA()(),t.TgZ(20,"button",13,14),t.NdJ("click",function(){t.CHM(e);const i=t.MAs(21),c=t.oxw();return t.KtG(c.addProduct(c.productDetails._id,i))}),t._uU(22,"Add To Cart"),t.qZA()()()()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("options",e.productDetailsOption),t.xp6(1),t.Q6J("ngForOf",e.productDetails.images),t.xp6(4),t.Oqu(e.productDetails.title),t.xp6(2),t.Oqu(e.productDetails.description),t.xp6(2),t.Oqu(e.productDetails.category.name),t.xp6(3),t.hij(" ",t.xi3(16,7,e.productDetails.price,"EGP")," "),t.xp6(4),t.hij(" ",e.productDetails.ratingsAverage," ")}}let v=(()=>{class s{constructor(e,r,i,c,x){this._ActivatedRoute=e,this._ProductService=r,this._Renderer2=i,this._CartService=c,this._ToastrService=x,this.productDetails=null,this.productDetailsOption={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!0}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productId=e.get("id"),console.log(this.productId)}}),this._ProductService.getProductDetails(this.productId).subscribe({next:({data:e})=>{this.productDetails=e}})}addProduct(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.addToCart(e).subscribe({next:i=>{this._ToastrService.success(i.message),this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartNumber.next(i.numOfCartItems)},error:i=>{this._Renderer2.removeAttribute(r,"disabled")}})}static#t=this.\u0275fac=function(r){return new(r||s)(t.Y36(d.gz),t.Y36(l.M),t.Y36(t.Qsj),t.Y36(p.N),t.Y36(m._W))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded shadow p-3 my-4",4,"ngIf"],[1,"w-75","mx-auto","rounded","shadow","p-3","my-4"],[1,"row","align-items-center","g-4"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"h5"],[1,"text-muted","small"],[1,"d-flex","align-items-center","justify-content-between","my-3"],[1,"small"],[1,"mb-0"],[1,"fas","fa-star","rating-color"],[1,"main-btn","w-100","py-2",3,"click"],["btnAdd",""],["carouselSlide",""],[1,"w-100",3,"src"]],template:function(r,i){1&r&&t.YNc(0,h,23,10,"section",0),2&r&&t.Q6J("ngIf",i.productDetails)},dependencies:[n.ez,n.sg,n.O5,n.H9,a.bB,a.Fy,a.Mp]})}return s})()}}]);