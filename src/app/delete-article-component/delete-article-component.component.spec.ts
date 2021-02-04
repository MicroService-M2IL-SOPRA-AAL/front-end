import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteArticleComponentComponent } from './delete-article-component.component';

describe('DeleteArticleComponentComponent', () => {
  let component: DeleteArticleComponentComponent;
  let fixture: ComponentFixture<DeleteArticleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteArticleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteArticleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
