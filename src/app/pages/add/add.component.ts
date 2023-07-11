import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
    product!: IProduct[];
    form = this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      image:['',[Validators.required]],
      price:[0,[Validators.required]],
      quality:[0,[Validators.required]],
      description:['',[Validators.required]]
    })
    constructor(
      private productService:ProductService,
      private router: Router,
      private fb: FormBuilder
      ){

    }
    onHandleSubmit(){
     const product = {
      name:this.form.value.name || '',
       image:this.form.value.image || '',
        price:this.form.value.price || 0,
         quality:this.form.value.quality || 0,
          description:this.form.value.description || '',
     }
     this.productService.addProducts(product).subscribe(()=>{
      confirm("Them san pham thanh cong")
      this.router.navigate([''])
     })
    }
}
