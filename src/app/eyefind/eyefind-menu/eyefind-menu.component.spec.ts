import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyefindMenuComponent } from './eyefind-menu.component';

describe('EyefindMenuComponent', () => {
  let component: EyefindMenuComponent;
  let fixture: ComponentFixture<EyefindMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyefindMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyefindMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
