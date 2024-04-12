import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panierv1Component } from './panierv1.component';

describe('Panierv1Component', () => {
  let component: Panierv1Component;
  let fixture: ComponentFixture<Panierv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Panierv1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Panierv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
