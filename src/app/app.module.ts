import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GooglePayButtonModule } from '@google-pay/button-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MissionComponent } from './mission/mission.component';
import { GiveComponent } from './give/give.component';
import { ShareComponent } from './share/share.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionComponent,
    GiveComponent,
    ShareComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GooglePayButtonModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
