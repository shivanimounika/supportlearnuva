import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';



@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    MyOrdersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
