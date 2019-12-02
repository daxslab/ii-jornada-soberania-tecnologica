import { Component, OnInit } from '@angular/core';
import {ProgramService} from '../api/program.service';
import {ModalController} from '@ionic/angular';
import {AbstractModalPage} from '../abstract-modal/abstract-modal.page';

@Component({
  selector: 'app-list',
  templateUrl: 'program.page.html',
  styleUrls: ['program.page.scss']
})
export class ProgramPage implements OnInit {
  public program = null;
  searchTerm: string;
  constructor(private programService: ProgramService, public modalController: ModalController) {
  }

  ngOnInit() {
    this.programService.getProgram().subscribe(result => {
      this.program = result;
    });
  }

  async setFilteredItems() {
    this.program = this.programService.filterProgram(this.searchTerm);
  }

  async openModal(conference) {
    const modal = await this.modalController.create({
      component: AbstractModalPage,
      componentProps: conference
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        // this.dataReturned = dataReturned.data;
        // alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

}
