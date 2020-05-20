import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5demoComponent } from './html5demo.component';

describe('Html5demoComponent', () => {
  let component: Html5demoComponent;
  let fixture: ComponentFixture<Html5demoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5demoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5demoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
