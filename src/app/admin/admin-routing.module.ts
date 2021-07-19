import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from '../addproducts/addproducts.component';
import { BrowserComponent } from '../browser/browser.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent,children:[
  {path:'addProducts',component:AddproductsComponent},
  {path:'browse',component:BrowserComponent},
 {path:'',redirectTo:'browse',pathMatch:'full'}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
