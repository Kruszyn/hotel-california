import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnesAndSpaComponent } from './wellnes-and-spa.component';

describe('WellnesAndSpaComponent', () => {
  let component: WellnesAndSpaComponent;
  let fixture: ComponentFixture<WellnesAndSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellnesAndSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnesAndSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
