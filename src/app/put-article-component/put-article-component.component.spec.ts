import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutArticleComponentComponent } from './put-article-component.component';

describe('PutArticleComponentComponent', () => {
  let component: PutArticleComponentComponent;
  let fixture: ComponentFixture<PutArticleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutArticleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutArticleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
