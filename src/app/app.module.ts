import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { Line1Component } from './shared/components/line1/line1.component';
import { Line2Component } from './shared/components/line2/line2.component';
import { Line3Component } from './shared/components/line3/line3.component';
import { Line4Component } from './shared/components/line4/line4.component';
import { Line5Component } from './shared/components/line5/line5.component';
import { Line6Component } from './shared/components/line6/line6.component';
import { Line7Component } from './shared/components/line7/line7.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Line1Component,
    Line2Component,
    Line3Component,
    Line4Component,
    Line5Component,
    Line6Component,
    Line7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
