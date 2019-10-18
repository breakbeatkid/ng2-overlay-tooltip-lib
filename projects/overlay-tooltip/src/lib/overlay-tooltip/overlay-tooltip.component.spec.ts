import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayTooltipComponent } from './overlay-tooltip.component';

describe('OverlayTooltipComponent', () => {
  let component: OverlayTooltipComponent;
  let fixture: ComponentFixture<OverlayTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
