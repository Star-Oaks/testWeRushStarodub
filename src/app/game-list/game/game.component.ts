import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game: Game
  private imgString: string = "./assets/gambling-logo.jpg" // local img
  constructor() { }

  ngOnInit(): void {
    if (this.game.url === undefined) { // This action is due to the fact that not all fields in the database have Url img
      this.game.url = this.imgString
    }
  }

}
