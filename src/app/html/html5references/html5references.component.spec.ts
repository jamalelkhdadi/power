import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5referencesComponent } from './html5references.component';

describe('Html5referencesComponent', () => {
  let component: Html5referencesComponent;
  let fixture: ComponentFixture<Html5referencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html5referencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5referencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
