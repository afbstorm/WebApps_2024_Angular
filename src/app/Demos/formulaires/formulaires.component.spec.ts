import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairesComponent } from './formulaires.component';

describe('FormulairesComponent', () => {
  let component: FormulairesComponent;
  let fixture: ComponentFixture<FormulairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
