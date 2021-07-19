import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor() { }
  @Input() gameObj:any;

  ngOnInit(): void {
  }

}
