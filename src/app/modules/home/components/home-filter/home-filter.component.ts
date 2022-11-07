import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilterOptions } from 'src/app/shared/models';

@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.scss'],
})
export class HomeFilterComponent implements OnInit {
  @Input() options: IFilterOptions[] = [];
  @Input() searchable = true;
  @Input() clearable = false;
  @Input() isMultiple = false;
  @Input() bindName = 'name';
  @Input() dropdownPlaceholder = '';
  @Input() isFirstSelected: boolean = false;

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
}
