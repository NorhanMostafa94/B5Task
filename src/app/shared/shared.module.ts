import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent, TopHeaderComponent, ControlsModule } from './components';

const BASEMODULES = [CommonModule];

const MODULES = [ControlsModule];

const COMPONENTS = [TopHeaderComponent, SvgComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...BASEMODULES, ...MODULES],
  exports: [...COMPONENTS],
})
export class SharedModule {}
