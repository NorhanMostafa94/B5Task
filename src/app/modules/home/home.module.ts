import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages';
import { HomeHeaderComponent, HomeCardComponent } from './components';
import { ControlsModule, SideBarModule } from 'src/app/shared/components';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

const BASEMODULES = [CommonModule, HomeRoutingModule];

const MODULES = [ControlsModule, SideBarModule, PipesModule];

const PAGES = [HomeComponent];

const COMPONENTS = [HomeHeaderComponent];

@NgModule({
  declarations: [...COMPONENTS, ...PAGES, HomeCardComponent],
  imports: [...BASEMODULES, ...MODULES],
})
export class HomeModule {}
