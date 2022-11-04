import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly baseUrl = '';

  /**
   * @description Base backend URL
   *
   * @readonly
   * @type {string}
   */
  // get URL(): string {
  //   return this.baseUrl;
  // }
  environment;
  constructor(private http: HttpClient) {
    this.environment = environment;
  }

  /**
   * @description Post request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @param options - to add custom config for request header
   * @return Observable of response, comes from the end point
   */
  post(url: string, data: any, options?: any): Observable<any> {
    let baseUrl = this.environment.baseUrl;
    return this.http.post(baseUrl + url, data, options);
  }

  /**
   * @description Get request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  get(url: string, data?: any): Observable<any> {
    let baseUrl = this.environment.baseUrl;
    return this.http.get(baseUrl + url, data);
  }
}
