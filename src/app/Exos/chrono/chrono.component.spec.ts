import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoComponent } from './chrono.component';

describe('ChronoComponent', () => {
  let component: ChronoComponent;
  let fixture: ComponentFixture<ChronoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
