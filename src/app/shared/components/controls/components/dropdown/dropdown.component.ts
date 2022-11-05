import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() searchable = true;
  @Input() clearable = false;
  @Input() isMultiple = false;
  @Input() label: string = '';
  @Input() field: any;
  @Input() bindName = 'name';
  @Input() placeholder = 'Please select';

  @Output('onChange') onChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * `selectionChange()`
   * @description to emit when option selected
   * @param option
   */
  selectionChange(option: any) {
    this.onChange.emit(option);
  }
}
