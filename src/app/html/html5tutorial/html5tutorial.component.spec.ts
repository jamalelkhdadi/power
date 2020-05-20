import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5tutorialComponent } from './html5tutorial.component';

describe('Html5tutorialComponent', () => {
  let component: Html5tutorialComponent;
  let fixture: ComponentFixture<Html5tutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5tutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5tutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
