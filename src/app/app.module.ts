import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { counterReducer } from './shared/actions/cart/cart.reducer';
import { SharedModule } from './shared/shared.module';

const MODULES = [CoreModule, SharedModule];

const BASEMODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  StoreModule.forRoot({ count: counterReducer }),
];
@NgModule({
  declarations: [AppComponent],
  imports: [...BASEMODULES, ...MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
