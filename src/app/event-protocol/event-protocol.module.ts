import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventProtocolPageRoutingModule } from './event-protocol-routing.module';

import { EventProtocolPage } from './event-protocol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventProtocolPageRoutingModule
  ],
  declarations: [EventProtocolPage]
})
export class EventProtocolPageModule {}
