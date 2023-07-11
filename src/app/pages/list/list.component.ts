import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  product!: IProduct[];
  constructor(private productService:ProductService){
    this.productService.getAllProducts().subscribe((data) =>{
      this.product = data
    })
  }
  removeItem(id:any){
    confirm("Xoa thanh cong")
    this.productService.removeProducts(id).subscribe(()=>{
      this.product= this.product.filter((data)=>data.id !== id)
    })
  }
}
