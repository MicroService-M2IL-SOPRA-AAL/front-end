import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriArticlesComponentComponent } from './tri-articles-component.component';

describe('TriArticlesComponentComponent', () => {
  let component: TriArticlesComponentComponent;
  let fixture: ComponentFixture<TriArticlesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriArticlesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriArticlesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
