import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneCommandeComponent } from './get-one-commande.component';

describe('GetOneCommandeComponent', () => {
  let component: GetOneCommandeComponent;
  let fixture: ComponentFixture<GetOneCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOneCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
