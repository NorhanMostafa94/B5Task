import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SvgComponent,
  TopHeaderComponent,
  ControlsModule,
  FooterComponent,
} from './components';
import { PipesModule } from './pipes/pipes.module';

const BASEMODULES = [CommonModule];

const MODULES = [ControlsModule];

const COMPONENTS = [TopHeaderComponent, SvgComponent, FooterComponent];

const PIPES = [PipesModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...BASEMODULES, ...MODULES, ...PIPES],
  exports: [...COMPONENTS],
})
export class SharedModule {}
