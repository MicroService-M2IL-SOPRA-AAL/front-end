import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlesComponentComponent } from './admin-articles-component.component';

describe('AdminArticlesComponentComponent', () => {
  let component: AdminArticlesComponentComponent;
  let fixture: ComponentFixture<AdminArticlesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticlesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticlesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
