import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizerCommitteePage } from './organizer-committee.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizerCommitteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizerCommitteePageRoutingModule {}
