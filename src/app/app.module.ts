import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { ProductdetailpageComponent } from './pages/productdetailpage/productdetailpage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoryComponent } from './components/category/category.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { ProductsComponent } from './components/products/products.component';
import { ErrorComponent } from './pages/error/error.component';

import { AppRoutingModule } from './app-routing.module';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductpageComponent,
    ProductdetailpageComponent,
    AboutpageComponent,
    ContactpageComponent,
    NavbarComponent,
    CarouselComponent,
    CategoryComponent,
    SubCategoryComponent,
    ProductsComponent,
    ErrorComponent,
    RegisterpageComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
