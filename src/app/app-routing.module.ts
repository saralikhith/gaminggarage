import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
//import { BrowseComponent } from './browse/browse.component';
import { BrowserComponent } from './browser/browser.component';
import { ContactedinfoComponent } from './contactedinfo/contactedinfo.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DiscoverComponent } from './discover/discover.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SingupComponent } from './singup/singup.component';
import { StoreComponent } from './store/store.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:'store',component:StoreComponent,children:[
    {path:'browse',component:BrowserComponent},
    {path:'discover',component:DiscoverComponent},
    {path:'',redirectTo:'browse',pathMatch:'full'}
  ]},
  {path:'contactus',component:ContactusComponent},
  {path:'signup',component:SingupComponent},
  {path:'login',component:LoginComponent},
  {path:'userprofile/:username',component:UserprofileComponent,children:[
    {path:'browse',component:BrowserComponent},
    {path:'gamesincart',component:UsercartComponent},
    {path:'',redirectTo:'browse',pathMatch:'full'}
  ]},
  {path:'',redirectTo:'store/browse',pathMatch:'full'},
  {path:'contact',component:ContactedinfoComponent},
  { path: 'admin/:username',canActivate:[AdminGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
