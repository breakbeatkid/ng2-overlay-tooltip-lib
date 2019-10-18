import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { OverlayTooltipComponent } from './overlay-tooltip.component';

@Directive({ selector: '[crowderOverlayTooltip]' })
export class OverlayTooltipDirective implements OnInit {

  @Input() tooltipMessage: string;

  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
          offsetY: -8,
        }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter') show() {
    const tooltipRef: ComponentRef<OverlayTooltipComponent> = this.overlayRef.attach(new ComponentPortal(OverlayTooltipComponent));
    tooltipRef.instance.tooltipMessage = this.tooltipMessage;
  }

  @HostListener('mouseout') hide() {
    this.overlayRef.detach();
  }
}
