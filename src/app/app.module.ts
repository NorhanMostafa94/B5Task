import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

const BASEMODULES = [CoreModule, HttpClientModule];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ...BASEMODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
