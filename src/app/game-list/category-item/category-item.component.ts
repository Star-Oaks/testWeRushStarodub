import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input() category:Category
  constructor() { }

  ngOnInit(): void {
  }

}
