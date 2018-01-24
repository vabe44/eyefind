import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyefindFeaturedSitesComponent } from './eyefind-featured-sites.component';

describe('EyefindFeaturedSitesComponent', () => {
  let component: EyefindFeaturedSitesComponent;
  let fixture: ComponentFixture<EyefindFeaturedSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyefindFeaturedSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyefindFeaturedSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
