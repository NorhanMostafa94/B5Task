import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: string[] = [];
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  /**
   * `getCategories()`
   * @description to get categories
   */
  getCategories() {
    this.homeService.getCategories().subscribe({
      next: (res: string[]) => (this.categories = res),
      error: () => {},
    });
  }
}
