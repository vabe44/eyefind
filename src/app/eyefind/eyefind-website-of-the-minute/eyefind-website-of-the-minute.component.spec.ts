import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyefindWebsiteOfTheMinuteComponent } from './eyefind-website-of-the-minute.component';

describe('EyefindWebsiteOfTheMinuteComponent', () => {
  let component: EyefindWebsiteOfTheMinuteComponent;
  let fixture: ComponentFixture<EyefindWebsiteOfTheMinuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyefindWebsiteOfTheMinuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyefindWebsiteOfTheMinuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
