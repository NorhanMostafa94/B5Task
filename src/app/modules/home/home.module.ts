import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages';
import {
  HomeHeaderComponent,
  HomeCardComponent,
  HomeFilterComponent,
} from './components';

import { ControlsModule, SideBarModule } from 'src/app/shared/components';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

const BASEMODULES = [CommonModule, HomeRoutingModule];

const MODULES = [
  ControlsModule,
  SideBarModule,
  PipesModule,
  InfiniteScrollModule,
];

const PAGES = [HomeComponent];

const COMPONENTS = [
  HomeHeaderComponent,
  HomeCardComponent,
  HomeFilterComponent,
];

@NgModule({
  declarations: [...COMPONENTS, ...PAGES],
  imports: [...BASEMODULES, ...MODULES],
})
export class HomeModule {}
