import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// external modules
import { NgSelectModule } from '@ng-select/ng-select';

// components
import {
  DropdownComponent,
  SearchComponent,
  DropdownWithSearchComponent,
} from './components';

const BASEMODULES = [CommonModule, FormsModule];

const MODULES = [NgSelectModule];

const COMPONENTS = [
  DropdownComponent,
  SearchComponent,
  DropdownWithSearchComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...BASEMODULES, ...MODULES],
  exports: [...COMPONENTS],
})
export class ControlsModule {}
