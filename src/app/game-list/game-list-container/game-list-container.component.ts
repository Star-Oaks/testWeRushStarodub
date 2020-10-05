import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SubscriptionLike } from 'rxjs';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Category } from 'src/app/shared/models/category';
import { Game } from 'src/app/shared/models/game';
import { TranslatesService } from 'src/app/shared/translate.service';


@Component({
  selector: 'app-game-list-container',
  templateUrl: './game-list-container.component.html',
  styleUrls: ['./game-list-container.component.scss']
})
export class GameListContainerComponent implements OnInit {
  public games: Array<Game>;
  public category: Array<Category>;
  private subscriptions: SubscriptionLike[] = [];

  constructor(private firebase: FirebaseService,
    private translate: TranslateService,
    private _chengeLocale: TranslatesService
  ) {
    this.subscriptions.push(this.firebase.getAllGames().subscribe((res) => {
      this.games = res
    }))
    this.subscriptions.push(this.firebase.getCategoryGames().subscribe((res) => {
      this.category = res
    }))
  }
  ngOnInit(): void {

  }
  public useLanguage(language: string) {
    this.translate.use(language);
    this._chengeLocale.chengeLocale(language);
  }

  public handleChange(event: string) {
    this.subscriptions.push(this.firebase.getGamesFiltredByName(event).subscribe((res) => {
      if (res.length > 0) {
        this.games = res;
      }
      else {
        return
      }
    }))
  }

  public categoryFiler(item: Category) {
    this.subscriptions.push(this.firebase.getGamesFiltredByCategory(item.category).subscribe((res) => {
      this.games = res;
    }))
  }
  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

}
