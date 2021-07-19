import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';
import { ContactusComponent } from './contactus/contactus.component';

import { DiscoverComponent } from './discover/discover.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { BrowseComponent } from './browse/browse.component';
import { SearchPipe } from './search.pipe';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SharedModule } from './shared/shared.module';
import { UsercartComponent } from './usercart/usercart.component';
import { AuthorizationService } from './authorization.service';
import { ContactedinfoComponent } from './contactedinfo/contactedinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SingupComponent,
    LoginComponent,
    StoreComponent,
    ContactusComponent,
    DiscoverComponent,
    GameDetailComponent,
    BrowseComponent,
    
    UserprofileComponent,
          UsercartComponent,
          ContactedinfoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthorizationService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
