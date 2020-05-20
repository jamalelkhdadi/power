import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmltagsComponent } from './htmltags.component';

describe('HtmltagsComponent', () => {
  let component: HtmltagsComponent;
  let fixture: ComponentFixture<HtmltagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmltagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmltagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
