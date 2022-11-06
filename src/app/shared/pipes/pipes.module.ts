import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipseTextPipe } from './pipes';

const BASEMODULES = [CommonModule];

const PIPES = [EllipseTextPipe];

@NgModule({
  declarations: [...PIPES],
  imports: [...BASEMODULES],
  exports: [...PIPES],
})
export class PipesModule {}
