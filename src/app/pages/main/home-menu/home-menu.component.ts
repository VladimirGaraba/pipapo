import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
})
export class HomeMenuComponent implements OnInit {
  is_bg: boolean = false;
  public m_items = [
    {
      id: 1,
      title: 'Bonuspunkte',
      icon: 'icon_bonus_point',
      route: '/menu/bonus-point',
      params: {}
    },
    {
      id: 2,
      title: 'Speisen bestellen',
      icon: 'icon_reorder',
      route: '/menu/order-food',
      params: {}
    },
    {
      id: 3,
      title: 'Speisekarte',
      icon: 'icon_order',
      route: '/menu/food-list',
      params: {}
    },
    {
      id: 4,
      title: 'Kontakt',
      icon: 'icon_contact_us',
      route: '/contact',
      params: {}
    },
    {
      id: 5,
      title: 'Galerie',
      icon: 'icon_gallery',
      route: '/menu/gallery',
      params: {}
    },
    {
      id: 6,
      title: 'Restaurant',
      icon: 'icon_restaurant',
      route: '/menu/restaurant',
      params: {}
    },
    {
      id: 7,
      title: 'Mein Konto',
      icon: 'icon_profile',
      route: '/user-info',
      params: {}
    }
  ];
  
  constructor() { }

  ngOnInit() {
    setTimeout(()=> {
      this.is_bg = true;
    },1000);
  }

}
