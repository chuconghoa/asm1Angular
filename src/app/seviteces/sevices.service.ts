import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import {Observable}from 'rxjs'
import {HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SevicesService {

  constructor(private http : HttpClient) { }
  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
  getProduct(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  AddProducts(product:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>('http://localhost:3000/products',product)
  }
  DeleteProducts(id:number):Observable<IProduct>{
    return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`)
  }
  EditProducts(product:IProduct):Observable<IProduct>{
    return this.http.patch<IProduct>(`http://localhost:3000/products/${product.id}`,product)
  }
}
