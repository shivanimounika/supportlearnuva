import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../core.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any =[ ];
  constructor(
    private activatedRoute:ActivatedRoute,
    private CoreService:CoreService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( params => {
      console.log(params);
      // if (params.category){
      //   this.CoreService.productsByCategory(params.category).subscribe(response =>{
      //     if(response.data && response.data.length > 0){
      //       this.products = response.data;
      //     }
        },(error:any) =>{

        });
      }
      addToCart(product:any):void{
        console.log(product);
      }
//   });

// }
    }
