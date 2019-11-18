import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizerCommitteePageRoutingModule } from './organizer-committee-routing.module';

import { OrganizerCommitteePage } from './organizer-committee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizerCommitteePageRoutingModule
  ],
  declarations: [OrganizerCommitteePage]
})
export class OrganizerCommitteePageModule {}
