import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MissionComponent } from './mission/mission.component';
import { GiveComponent } from './give/give.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  { path: '',   redirectTo: 'mission', pathMatch: 'full' },
  { path: 'mission', component: MissionComponent },
  { path: 'give', component: GiveComponent },
  { path: 'share', component: ShareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
