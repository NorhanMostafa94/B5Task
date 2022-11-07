import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOptions } from 'src/app/shared/models';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() title?: string;
  @Input() list: IOptions[] = [];

  @Output() onItemClicked = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  /**
   * `getClickedItem()`
   * @description emit the item clicked from the list
   * @param item {string}
   */
  getClickedItem(item: IOptions) {
    this.onItemClicked.emit(item);
  }
}
