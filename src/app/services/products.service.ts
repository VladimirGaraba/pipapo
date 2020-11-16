import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://pipapo-graz.at/api/products';
  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'));
  }

  public getAllProducts() {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log('Here is Headers : ', headers);
    return this.http.get(this.apiUrl, { headers: headers });
  }
}
