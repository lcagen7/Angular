import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSubjectComponent } from './header-subject.component';

describe('HeaderSubjectComponent', () => {
  let component: HeaderSubjectComponent;
  let fixture: ComponentFixture<HeaderSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
