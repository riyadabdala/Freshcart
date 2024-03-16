export interface Product {
    title: string
    price: number
    imageCover: string
    category: CategoryPro
    ratingsAverage: number
    _id?:string
  }
  
  
  export interface CategoryPro {
    name: string
  }
  