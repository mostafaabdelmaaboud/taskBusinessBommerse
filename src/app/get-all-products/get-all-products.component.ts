import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products-service/products.service';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent implements OnInit {

  constructor(private ProductsService: ProductsService) { }

  ngOnInit() {

    this.ProductsService.GetAllProducts().subscribe(data => {

      console.log(data);

    })

  }

}
