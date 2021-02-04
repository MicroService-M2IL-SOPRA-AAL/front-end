import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommandesComponent } from './post-commandes.component';

describe('PostCommandesComponent', () => {
  let component: PostCommandesComponent;
  let fixture: ComponentFixture<PostCommandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
