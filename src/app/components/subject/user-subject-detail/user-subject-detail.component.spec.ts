import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubjectDetailComponent } from './user-subject-detail.component';

describe('UserSubjectDetailComponent', () => {
  let component: UserSubjectDetailComponent;
  let fixture: ComponentFixture<UserSubjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
