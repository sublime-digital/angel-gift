import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionComponent } from './mission/mission.component';
import { GiveComponent } from './give/give.component';
import { ShareComponent } from './share/share.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '',   redirectTo: 'mission', pathMatch: 'full' },
  { path: 'mission', component: MissionComponent },
  { path: 'give', component: GiveComponent },
  { path: 'share', component: ShareComponent },
  { path: 'settings', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
