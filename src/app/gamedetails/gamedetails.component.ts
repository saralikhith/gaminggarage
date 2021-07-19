import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.css']
})
export class GamedetailsComponent implements OnInit {

  constructor() { }
  @Input() gameObj:any;
  ngOnInit(): void {
  }

}
