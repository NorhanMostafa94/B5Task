import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// external modules
import { NgSelectModule } from '@ng-select/ng-select';

// components
import { DropdownComponent } from './components/dropdown/dropdown.component';

const MODULES = [NgSelectModule];

const COMPONENTS = [DropdownComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...MODULES],
  exports: [...COMPONENTS],
})
export class ControlsModule {}
