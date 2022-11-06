import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages';
import { HomeHeaderComponent } from './components';
import { ControlsModule, SideBarModule } from 'src/app/shared/components';

const BASEMODULES = [CommonModule, HomeRoutingModule];

const MODULES = [ControlsModule, SideBarModule];

const PAGES = [HomeComponent];

const COMPONENTS = [HomeHeaderComponent];

@NgModule({
  declarations: [...COMPONENTS, ...PAGES],
  imports: [...BASEMODULES, ...MODULES],
})
export class HomeModule {}
