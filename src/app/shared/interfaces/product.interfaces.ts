export interface Product{

  id:number;
  title:string;
  category:string;
  description:string;
  image:string;
  prince:number;
  rating: {rate:number; count:number};

}
