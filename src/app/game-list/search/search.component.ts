import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchText = new FormControl('');
  private subscriptions: SubscriptionLike[] = [];
  @Output() onChange = new EventEmitter();
  constructor() {

    this.subscriptions.push(this.searchText.valueChanges.subscribe((res) => {
      this.onChange.emit(res)
    }));
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

}
