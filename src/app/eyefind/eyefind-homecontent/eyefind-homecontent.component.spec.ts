import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyefindHomecontentComponent } from './eyefind-homecontent.component';

describe('EyefindHomecontentComponent', () => {
  let component: EyefindHomecontentComponent;
  let fixture: ComponentFixture<EyefindHomecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyefindHomecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyefindHomecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
