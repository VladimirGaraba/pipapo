import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { OrderFoodComponent } from './order-food/order-food.component';
import { BonusPointComponent } from './bonus-point/bonus-point.component';
import { FoodListComponent } from './food-list/food-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CatMenuComponent } from './cat-menu/menu.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PaymethodsComponent } from './paymethods/paymethods.component';
import { DoneComponent } from './done/done.component';
import { BonusResultComponent } from './bonus-result/bonus-result.component';


const routes: Routes = [
  {
    path: '',
    component: HomeMenuComponent,
    children: []
  }, {
    path: 'order-food',
    component: OrderFoodComponent
  }, {
    path: 'bonus-point',
    component: BonusPointComponent
  }, {
    path: 'bonus-result',
    component: BonusResultComponent
  }, {
    path: 'food-list',
    component: FoodListComponent
  }, {
    path: 'gallery',
    component: GalleryComponent
  }, {
    path: 'restaurant',
    component: RestaurantComponent
  }, {
    path: 'cat-menu',
    component: CatMenuComponent
  }, {
    path: 'order-detail',
    component: OrderDetailComponent
  }, {
    path: 'payment',
    component: PaymethodsComponent
  }, {
    path: 'done',
    component: DoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
