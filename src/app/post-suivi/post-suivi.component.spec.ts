import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSuiviComponent } from './post-suivi.component';

describe('PostSuiviComponent', () => {
  let component: PostSuiviComponent;
  let fixture: ComponentFixture<PostSuiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSuiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
