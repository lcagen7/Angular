import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservertestComponent } from './observertest.component';

describe('ObservertestComponent', () => {
  let component: ObservertestComponent;
  let fixture: ComponentFixture<ObservertestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservertestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
