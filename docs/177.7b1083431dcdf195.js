"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[177],{5177:(u,c,s)=>{s.r(c),s.d(c,{PaymentComponent:()=>_});var l=s(6814),r=s(95),t=s(4769),h=s(7163),n=s(6286);let _=(()=>{class e{constructor(o,a){this._ActivatedRoute=o,this._CartService=a,this.cartId="",this.orderForm=new r.cw({details:new r.NI(""),phone:new r.NI(""),city:new r.NI("")})}handleForm(){this._CartService.checkOut(this.cartId,this.orderForm.value).subscribe({next:o=>{"success"===o.status&&window.open(o.session.url,"_self")}})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:o=>{this.cartId=o.get("id"),console.log(this.cartId)}})}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(h.gz),t.Y36(n.N))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-payment"]],standalone:!0,features:[t.jDz],decls:18,vars:1,consts:[[1,"w-75","mx-auto","rounded","p-3","bg-main-light","mt-3"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","details"],["type","text","id","details","formControlName","details",1,"form-control"],["for","phone"],["type","tel","id","phone","formControlName","phone",1,"form-control"],["for","city"],["type","text","id","city","formControlName","city",1,"form-control"],[1,"main-btn","mt-3"]],template:function(a,m){1&a&&(t.TgZ(0,"section",0)(1,"h1"),t._uU(2,"CheckOut Session"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return m.handleForm()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"details"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"div",2)(9,"label",5),t._uU(10,"phone"),t.qZA(),t._UZ(11,"input",6),t.qZA(),t.TgZ(12,"div",2)(13,"label",7),t._uU(14,"city"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t.TgZ(16,"button",9),t._uU(17,"CheckOut"),t.qZA()()()),2&a&&(t.xp6(3),t.Q6J("formGroup",m.orderForm))},dependencies:[l.ez,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return e})()},6286:(u,c,s)=>{s.d(c,{N:()=>h});var l=s(5619),r=s(4769),t=s(9862);let h=(()=>{class n{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new l.X(0),this.myToken={token:localStorage.getItem("etoken")}}addToCart(e){return this._HttpClient.post(this.baseUrl+"cart",{productId:e},{headers:this.myToken})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart   ",{headers:this.myToken})}removeCartItem(e){return this._HttpClient.delete(this.baseUrl+`cart/${e}`,{headers:this.myToken})}updateCartCount(e,i){return this._HttpClient.put(this.baseUrl+`cart/${e}`,{count:i},{headers:this.myToken})}claerCart(){return this._HttpClient.delete(this.baseUrl+"cart",{headers:this.myToken})}checkOut(e,i){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${e}?url=http://localhost:4200`,{shippingAddress:i},{headers:this.myToken})}static#t=this.\u0275fac=function(i){return new(i||n)(r.LFG(t.eN))};static#e=this.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);