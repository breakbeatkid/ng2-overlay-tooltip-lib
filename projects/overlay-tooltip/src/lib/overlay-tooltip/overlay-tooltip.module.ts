import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { OverlayTooltipComponent } from './overlay-tooltip.component';
import { OverlayTooltipDirective } from './overlay-tooltip.directive';

@NgModule({
  declarations: [
    OverlayTooltipComponent,
    OverlayTooltipDirective
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    OverlayTooltipComponent,
    OverlayTooltipDirective
  ],
  entryComponents: [
    OverlayTooltipComponent
  ]
})
export class OverlayTooltipModule { }
