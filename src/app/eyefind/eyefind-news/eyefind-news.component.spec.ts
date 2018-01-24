import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyefindNewsComponent } from './eyefind-news.component';

describe('EyefindNewsComponent', () => {
  let component: EyefindNewsComponent;
  let fixture: ComponentFixture<EyefindNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyefindNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyefindNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
