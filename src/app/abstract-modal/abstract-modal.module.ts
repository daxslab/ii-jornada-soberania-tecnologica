import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstractModalPageRoutingModule } from './abstract-modal-routing.module';

import { AbstractModalPage } from './abstract-modal.page';
import {ProgramPageModule} from '../program/program.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbstractModalPageRoutingModule,
    ProgramPageModule
  ],
  declarations: [AbstractModalPage]
})
export class AbstractModalPageModule {}
