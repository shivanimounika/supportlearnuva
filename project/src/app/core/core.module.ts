import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { SelectedProductComponent } from './selected-product/selected-product.component';
import { CartComponent } from './cart/cart.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { Routes,RouterModule } from '@angular/router';

const routes:Routes = [
  {path: '', redirectTo: 'homepage',pathMatch:'full'},
  {path:'homepage',component:HomepageComponent},
  {path: 'selected-product',component:SelectedProductComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
]

@NgModule({
  declarations: [
    HomepageComponent,
    ProductsComponent,
    SelectedProductComponent,
    CartComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
