import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsrapComponent } from './bootsrap.component';

describe('BootsrapComponent', () => {
  let component: BootsrapComponent;
  let fixture: ComponentFixture<BootsrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootsrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootsrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
