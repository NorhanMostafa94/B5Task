import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {
  @Input() product: IProduct = {} as IProduct;
  @Output() onBuyNow = new EventEmitter<IProduct>();
  constructor() {}

  ngOnInit(): void {}

  /**
   * `buyNow()`
   * @description when click on buy now emits the item
   */
  buyNow(): void {
    this.onBuyNow.emit(this.product);
  }
}
