import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlatributsComponent } from './htmlatributs.component';

describe('HtmlatributsComponent', () => {
  let component: HtmlatributsComponent;
  let fixture: ComponentFixture<HtmlatributsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlatributsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlatributsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
