import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  searchQuery:string = '';
  allSuggestions: string[] = ['Black Shirt', 'Red Shirt', 'Socks', 'Fossil Watch', 'Shoes', 'Grey Shirt'];
  filteredSuggestions:string[] = [];
  currentpage : number = 1;
  itemsperPage:number = 5;


  products = [
    { name: 'Black Shirt', price: 99, image: 'assets/BlackTop.png' },
    { name: 'Red Shirt', price: 799, image: 'assets/product-1.jpg' },
    { name: 'Blue Shirt', price: 899, image: 'assets/product-4.jpg' },
    { name: 'Black Shoes', price: 999, image: 'assets/product-2.jpg' },
    { name: 'Black Shirt', price: 199, image: 'assets/product-6.jpg' },
    { name: 'Socks', price: 99, image: 'assets/product-7.jpg' },
    { name: 'Fossil Watch', price: 1299, image: 'assets/product-8.jpg' },
    { name: 'Black Watch', price: 1399, image: 'assets/product-9.jpg' },
    { name: 'Black Shoe', price: 1499, image: 'assets/product-10.jpg' },
    { name: 'Grey Shoes', price: 1599, image: 'assets/product-11.jpg' },
  ];

  get filteredProducts() {
    const queryProduct = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    console.log(queryProduct)
    return queryProduct;
  }

  filterSuggestions(){
    const query = this.searchQuery.toLowerCase();
    this.filteredSuggestions = this.allSuggestions.filter(item =>
    item.toLowerCase().includes(query)
  );
  }

  selectSuggestion(suggestion:string){
    this.searchQuery = suggestion
    this.filteredSuggestions = []
  }

  paginatedProducts(){
    const starIndex = this.searchQuery.length > 0 ? 0 : (this.currentpage - 1) * this.itemsperPage;
    const paginatedProductsArray =  this.filteredProducts.slice(starIndex,starIndex+this.itemsperPage);
    return paginatedProductsArray;
  }

  get totalPages(){
    return Math.ceil(this.filteredProducts.length/this.itemsperPage);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  gotToPage(page:number){
    if(page >=1 && page <= this.totalPages){
      this.currentpage = page;
    }
  }

  
}
