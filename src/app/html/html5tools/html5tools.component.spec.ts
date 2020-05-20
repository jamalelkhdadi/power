import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5toolsComponent } from './html5tools.component';

describe('Html5toolsComponent', () => {
  let component: Html5toolsComponent;
  let fixture: ComponentFixture<Html5toolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5toolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5toolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
