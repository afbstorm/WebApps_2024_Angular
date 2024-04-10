import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chronov2Component } from './chronov2.component';

describe('Chronov2Component', () => {
  let component: Chronov2Component;
  let fixture: ComponentFixture<Chronov2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chronov2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Chronov2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
