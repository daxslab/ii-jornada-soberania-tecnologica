import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'II Jornada de Soberanía Tecnológica',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Comité Organizador',
      url: '/organizer-committee',
      icon: 'briefcase'
    },
    {
      title: 'Protocolo para el Evento',
      url: '/event-protocol',
      icon: 'paper'
    },
    {
      title: 'Programa',
      url: '/program',
      icon: 'calendar'
    },
    {
      title: 'Patrocinadores',
      url: '/sponsors',
      icon: 'ribbon'
    },
    {
      title: 'Acerca de',
      url: '/about',
      icon: 'alert'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
