import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  count$: Observable<number>;

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

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

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
