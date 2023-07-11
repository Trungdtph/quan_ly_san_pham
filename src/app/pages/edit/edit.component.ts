import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
product!: IProduct;
    form = this.fb.group({
      name:[''],
      image:[''],
      price:[0],
      quality:[0],
      description:['']
    })
    constructor(
      private productService:ProductService,
      private router: Router,
      private fb: FormBuilder,
      private activedRoute: ActivatedRoute
      ){
        this.activedRoute.paramMap.subscribe((params)=>{
          const id = params.get('id')
          this.productService.getOneProducts(id).subscribe({
            next: (product)=>{
              this.product = product
              this.form.patchValue(product)
            }
          })
          
          

        })
    }
    onHandleSubmit(){
     const product = {
     id:this.product.id,
      name:this.form.value.name || '',
       image:this.form.value.image || '',
        price:this.form.value.price || 0,
         quality:this.form.value.quality || 0,
          description:this.form.value.description || '',
     }
     this.productService.updateProducts(product).subscribe(()=>{
      confirm("Sua san pham thanh cong")
      this.router.navigate([''])
     })
    }
}
