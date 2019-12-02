import {Component, HostListener} from '@angular/core';

import {MenuController, ModalController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Convocatoria',
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
      title: 'Colaboradores',
      url: '/sponsors',
      icon: 'ribbon'
    },
    {
      title: 'Acerca de',
      url: '/about',
      icon: 'alert'
    }
  ];
  private lastRoute = null;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public modalCtrl: ModalController,
    private menu: MenuController
  ) {
    this.initializeApp();
    this.platform.backButton.subscribe(async () => {

      this.lastRoute = window.location.pathname;

      // close modal
      try {
        const element = await this.modalCtrl.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {}

      // // close side menu
      // try {
      //   const element = await this.menu.getOpen();
      //   if (element !== null && element.isOpen()) {
      //     this.menu.close();
      //     return;
      //   }
      // } catch (error) {}

      if (this.lastRoute === '/home') {
        // exit app
        navigator['app'].exitApp();
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
