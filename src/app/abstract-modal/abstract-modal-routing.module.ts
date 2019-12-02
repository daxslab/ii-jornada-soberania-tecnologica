import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbstractModalPage } from './abstract-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AbstractModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbstractModalPageRoutingModule {}
