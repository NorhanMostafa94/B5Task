import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-with-search',
  templateUrl: './dropdown-with-search.component.html',
  styleUrls: ['./dropdown-with-search.component.scss'],
})
export class DropdownWithSearchComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() searchable = true;
  @Input() clearable = false;
  @Input() isMultiple = false;
  @Input() bindName = 'name';
  @Input() dropdownPlaceholder = 'All categories';

  @Input() searchPlaceholder = 'Search Products, categories ...';

  @Output() onSearch = new EventEmitter<string>();
  @Output() onSearchEnter = new EventEmitter<string>();

  @Output() onDropdownChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * `dropdownChange()`
   * @description it will emit the option value
   * @param option
   */
  dropdownChange(option: any): void {
    this.onDropdownChange.emit(option);
  }

  /**
   * `search()`
   * @description to emit search value on typing
   */
  search(searchValue: string): void {
    this.onSearch.emit(searchValue);
  }

  /**
   * `searchWithEnter()`
   * @description to emit search value on enter
   */
  searchWithEnter(searchValue: string): void {
    this.onSearchEnter.emit(searchValue);
  }
}
