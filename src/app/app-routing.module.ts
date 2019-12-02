import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'program',
    loadChildren: () => import('./program/program.module').then(m => m.ProgramPageModule)
  },
  {
    path: 'organizer-committee',
    loadChildren: () => import('./organizer-committee/organizer-committee.module').then( m => m.OrganizerCommitteePageModule)
  },
  {
    path: 'event-protocol',
    loadChildren: () => import('./event-protocol/event-protocol.module').then( m => m.EventProtocolPageModule)
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./sponsors/sponsors.module').then( m => m.SponsorsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'abstract-modal',
    loadChildren: () => import('./abstract-modal/abstract-modal.module').then( m => m.AbstractModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
