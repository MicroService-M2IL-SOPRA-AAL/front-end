import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEtatSuiviComponent } from './get-etat-suivi.component';

describe('GetEtatSuiviComponent', () => {
  let component: GetEtatSuiviComponent;
  let fixture: ComponentFixture<GetEtatSuiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEtatSuiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEtatSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
