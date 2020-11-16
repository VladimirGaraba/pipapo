import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouteService } from './services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'GEBURTSTAGSAKTION',
      url: '/gift',
      icon: 'gift'
    },
    {
      title: 'REORDER-FUNKTION',
      url: '/re-order',
      icon: 'phone-portrait'
    },
    {
      title: 'RESTAURANT',
      url: '/menu/restaurant',
      icon: 'restaurant'
    },
    {
      title: 'KONTAKT',
      url: '/contact',
      icon: 'mail'
    },
    {
      title: 'MEIN KONTO',
      url: '/user-info',
      icon: 'wallet'
    },
    {
      title: 'EINSTELLUNGEN',
      url: '/settings',
      icon: 'cog'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private routeSvc: RouteService
  ) {
    this.initializeApp();
    this.routeSvc.loadRouting();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
