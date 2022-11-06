import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() title?: string = 'Categories';
  @Input() list: string[] = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
    'sunglasses',
    'automotive',
    'motorcycle',
    'lighting',
  ];

  @Output() onItemClicked = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  /**
   * `getClickedItem()`
   * @description emit the item clicked from the list
   * @param item {string}
   */
  getClickedItem(item: string) {
    this.onItemClicked.emit(item);
  }
}
