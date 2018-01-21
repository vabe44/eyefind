import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyefindHeaderComponent } from './eyefind-header.component';

describe('EyefindHeaderComponent', () => {
  let component: EyefindHeaderComponent;
  let fixture: ComponentFixture<EyefindHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyefindHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyefindHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
