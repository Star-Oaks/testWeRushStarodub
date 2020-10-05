import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Category } from './models/category';
import { Game } from './models/game'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }
  public getAllGames(): Observable<Game[]> {
    return this.db.list<Game>('items').valueChanges();
  }
  public getCategoryGames(): Observable<Category[]> {
    return this.db.list<Category>('category').valueChanges();
  }
  public getGamesFiltredByCategory(item: string): Observable<Game[]> {

    return this.db.list<Game>('items', ref => ref.orderByChild("itemType").equalTo(item)).valueChanges();
  }
  public getGamesFiltredByName(item: string): Observable<Game[]> {
    return this.db.list<Game>('items', ref => ref.orderByChild("name").startAt(item)).valueChanges();
  }
}
