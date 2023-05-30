import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { SevicesService } from 'src/app/seviteces/sevices.service';
import {FormBuilder,Validators}from '@angular/forms'
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  products! :IProduct;
  constructor(
    private FormBuilder : FormBuilder ,
    private SevicesService: SevicesService ,
    private navige : Router ,
    private ActivatedRoute : ActivatedRoute
  ){
    this.ActivatedRoute.paramMap.subscribe(par =>{
      const id  = Number(par.get('id'));
      this.SevicesService.getProduct(id).subscribe(data =>{
        this.products = data;
        this.productsForm.patchValue({
          name: data.name ,
          price: data.price
        })
      }
         
        )
        
    })
  }
  
  productsForm= this.FormBuilder.group({
    name: ['',[Validators.required, Validators.minLength(5)]],
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
