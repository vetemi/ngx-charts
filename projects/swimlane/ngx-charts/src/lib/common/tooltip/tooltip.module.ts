import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TooltipContentComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';


@NgModule({
  declarations: [TooltipContentComponent, TooltipDirective],
  exports: [TooltipContentComponent, TooltipDirective],
  imports: [CommonModule],
  entryComponents: [TooltipContentComponent]
})
export class TooltipModule {}
