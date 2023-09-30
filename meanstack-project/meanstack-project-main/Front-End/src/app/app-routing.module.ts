import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeProductsDetailsComponent } from './home-products-details/home-products-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { BeautyPageComponent } from './beauty-page/beauty-page.component';
import { BeautyProductDetailsComponent } from './beauty-product-details/beauty-product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { GamesComponent } from './games/games.component';
import { GamesDetailsComponent } from './games-details/games-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: GamesDetailsComponent },
  { path: '', component: HomeComponent },
  { path: 'homeProducts', component: HomeComponent },
  { path: 'homeProductsDetails/:id', component: HomeProductsDetailsComponent },
  { path: 'beautyProducts', component: BeautyPageComponent },
  { path: 'beautyProductsDetails/:id', component: BeautyProductDetailsComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'footer', component: FooterComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
