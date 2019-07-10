import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllProductsComponent } from './get-all-products/get-all-products.component';

const routes: Routes = [{
  path: "", component: GetAllProductsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
