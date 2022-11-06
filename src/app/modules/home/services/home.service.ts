import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { APIURL } from 'src/assets/config/http/api-url';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpService: HttpService) {}

  getCategories(): Observable<string[]> {
    const url = APIURL.home.categories;
    return this.httpService.get(url);
  }
}
