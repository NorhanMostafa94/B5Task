import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() title?: string;
  @Input() list: string[] = [];

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
