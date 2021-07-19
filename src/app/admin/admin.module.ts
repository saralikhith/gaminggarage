import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AddproductsComponent } from '../addproducts/addproducts.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AddproductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
