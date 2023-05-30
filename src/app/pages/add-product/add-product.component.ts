import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import {Validators,FormBuilder}from '@angular/forms'
import { SevicesService } from 'src/app/seviteces/sevices.service';
import { Router}from '@angular/router'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  constructor(
    private FormBuilder : FormBuilder,
    private SevicesService: SevicesService,
    private navige : Router
  ){

  }

  productsForm= this.FormBuilder.group({
    name: ['',[Validators.required, Validators.minLength(4)]],
    price: 0
  })
  onHanlesubmit(){
    const product :IProduct ={
      name: this.productsForm.value.name || '',
      price : this.productsForm.value.price || 0,      
    }
     this.SevicesService.AddProducts(product).subscribe(data=>{
      this.navige.navigate([''])
     }) 
  }
}
