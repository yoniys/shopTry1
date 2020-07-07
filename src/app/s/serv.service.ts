import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(public http:HttpClient  ) { }
  counter=0
  a=["https://d3m9l0v76dty0.cloudfront.net/system/photos/3412125/original/2949ec11d81daa5d9873ea93e82d22ed.jpg",
  "https://cdn.shopify.com/s/files/1/0712/4751/products/BX6E-02E_High_Large_SIDE_2000x.png?v=1571438901" ,
  "https://images-na.ssl-images-amazon.com/images/I/81VTlugxJPL._SL1500_.jpg",
  "https://cdn.shopify.com/s/files/1/1728/2157/products/05-62680_KidsReplacementBall_Green_A.jpg?v=1553029312",
  "https://www.bcf.com.au/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw20bfd25f/images/520209/BCF_520209_hi-res.jpg"
   ]
}
