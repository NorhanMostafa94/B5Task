import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() placeholder = 'Search';

  @Output() onSearch = new EventEmitter<string>();
  @Output() onSearchEnter = new EventEmitter<string>();

  value: string = '';
  constructor() {}

  ngOnInit(): void {}

  /**
   * `search()`
   * @description to emit search value on typing
   */
  search(): void {
    this.onSearch.emit(this.value);
  }

  /**
   * `searchWithEnter()`
   * @description to emit search value on enter
   */
  searchWithEnter(): void {
    this.onSearchEnter.emit(this.value);
  }
}
