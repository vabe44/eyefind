import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyefindRecentBleetsComponent } from './eyefind-recent-bleets.component';

describe('EyefindRecentBleetsComponent', () => {
  let component: EyefindRecentBleetsComponent;
  let fixture: ComponentFixture<EyefindRecentBleetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyefindRecentBleetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyefindRecentBleetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
