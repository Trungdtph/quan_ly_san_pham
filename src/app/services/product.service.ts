import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = `http://localhost:3000/products`;
  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}`);
  }
  getOneProducts(id:any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }
  removeProducts(id:any): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
  addProducts(product:any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}`,product);
  }
  updateProducts(product:any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${product.id}`,product);
  }
} 
