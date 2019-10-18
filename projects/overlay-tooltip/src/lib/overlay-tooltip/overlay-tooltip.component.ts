import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'lib-overlay-tooltip',
  styleUrls: ['./overlay-tooltip.component.scss'],
  templateUrl: './overlay-tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ])
    ]),
  ],
})
export class OverlayTooltipComponent {
  @Input() tooltipMessage: string;
}
