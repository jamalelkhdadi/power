import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlreferencesComponent } from './htmlreferences.component';

describe('HtmlreferencesComponent', () => {
  let component: HtmlreferencesComponent;
  let fixture: ComponentFixture<HtmlreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
