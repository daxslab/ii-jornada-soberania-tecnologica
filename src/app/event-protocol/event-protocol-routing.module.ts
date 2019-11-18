import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventProtocolPage } from './event-protocol.page';

const routes: Routes = [
  {
    path: '',
    component: EventProtocolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventProtocolPageRoutingModule {}
