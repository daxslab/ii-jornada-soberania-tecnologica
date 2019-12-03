import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-abstract-modal',
  templateUrl: './abstract-modal.page.html',
  styleUrls: ['./abstract-modal.page.scss'],
})
export class AbstractModalPage implements OnInit {

  conference;
  private backbuttonSubscription: Subscription;

  constructor(
      private modalController: ModalController,
      private navParams: NavParams
  ) { }

  ngOnInit() {
    this.conference = this.navParams.data;
  }

  @HostListener('document:ionBackButton', ['$event'])
  private async overrideHardwareBackAction($event: any) {
    await this.modalController.dismiss();
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

}
