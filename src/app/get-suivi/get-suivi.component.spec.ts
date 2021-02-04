import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSuiviComponent } from './get-suivi.component';

describe('GetSuiviComponent', () => {
  let component: GetSuiviComponent;
  let fixture: ComponentFixture<GetSuiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSuiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
