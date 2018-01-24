import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyefindSponsoredAdvertComponent } from './eyefind-sponsored-advert.component';

describe('EyefindSponsoredAdvertComponent', () => {
  let component: EyefindSponsoredAdvertComponent;
  let fixture: ComponentFixture<EyefindSponsoredAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyefindSponsoredAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyefindSponsoredAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
