import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostArticleComponentComponent } from './post-article-component.component';

describe('PostArticleComponentComponent', () => {
  let component: PostArticleComponentComponent;
  let fixture: ComponentFixture<PostArticleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostArticleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostArticleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
