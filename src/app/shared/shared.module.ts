import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserComponent } from '../browser/browser.component';
import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';
import { GamedetailsComponent } from '../gamedetails/gamedetails.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';




@NgModule({
  declarations: [
    BrowserComponent,
    SearchPipe,
    GamedetailsComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports:[NgxPaginationModule,BrowserComponent,SearchPipe, GamedetailsComponent]
})
export class SharedModule { }
