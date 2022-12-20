import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVisitanteComponent } from './home-visitante.component';

describe('HomeVisitanteComponent', () => {
  let component: HomeVisitanteComponent;
  let fixture: ComponentFixture<HomeVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
