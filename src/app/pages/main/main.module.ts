import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';
import { OrderFoodComponent } from './order-food/order-food.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BonusPointComponent } from './bonus-point/bonus-point.component';
import { FoodListComponent } from './food-list/food-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CatMenuComponent } from './cat-menu/menu.component';
import { IonicRatingModule } from 'ionic-rating';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PaymethodsComponent } from './paymethods/paymethods.component';
import { DoneComponent } from './done/done.component';
import { BonusResultComponent } from './bonus-result/bonus-result.component';

@NgModule({
  declarations: [
    HomeMenuComponent,
    OrderFoodComponent,
    BonusPointComponent,
    FoodListComponent,
    GalleryComponent,
    RestaurantComponent,
    CatMenuComponent,
    OrderDetailComponent,
    PaymethodsComponent,
    DoneComponent,
    BonusResultComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    MainRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 2,
      innerStrokeWidth: 0,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 500
    }),
    IonicRatingModule
  ]
})
export class MainModule { }
