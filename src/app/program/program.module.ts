import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ProgramPage } from './program.page';
import {VoteLinksComponent} from '../vote-links/vote-links.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProgramPage
      }
    ])
  ],
  exports: [
    VoteLinksComponent
  ],
  declarations: [ProgramPage, VoteLinksComponent]
})
export class ProgramPageModule {}
