import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { SevicesService } from 'src/app/seviteces/sevices.service';
import {Router}from '@angular/router'
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  products! :IProduct[];
  constructor(private SevicesService:SevicesService){
    this.SevicesService.getProducts().subscribe(data =>{
      this.products = data
    })
  }
  Remove(id:number){
    const defaet = confirm('banj có muốn xóa ')
    if( defaet){
      this.SevicesService.DeleteProducts(id).subscribe(()=>{
        this.products=this.products.filter(pro =>pro.id !== id)
     })
    }
  }
}
