import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListRoutingModule } from './game-list-routing.module';
import { GameListContainerComponent } from './game-list-container/game-list-container.component';
import { GameComponent } from './game/game.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [GameListContainerComponent, GameComponent, CategoryItemComponent, SearchComponent],
  imports: [
    CommonModule,
    GameListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class GameListModule { }
