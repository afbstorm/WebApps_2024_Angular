import { Component } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-formulaires',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './formulaires.component.html',
  styleUrl: './formulaires.component.scss'
})
export class FormulairesComponent {
  title: string = 'Demos des services en Angular';
  control: FormControl;
  group: FormGroup;
  array: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Utilisé pour un seul et unique input. Généralement on préfère le ngModel
    this.control = this.formBuilder.control(null, [Validators.required])

    this.group = this.formBuilder.group({
      prenom: [null, Validators.required],
      age: [null, Validators.required]
  })

    this.array = this.formBuilder.group({
      array: this.formBuilder.array([this.formBuilder.control(null, Validators.required)])
    });
  }

  onControlSubmit(e: Event) {
    e.preventDefault();
    console.log(this.control.value)
  }

  onGroupSubmit(e: Event) {
    e.preventDefault();
    console.log(this.group.value)
  }

  getArrayForm(): FormArray {
    return this.array.get('array') as FormArray
  }

  addControl() {
    this.getArrayForm().push(this.formBuilder.control(null, Validators.required));
  }

  onArraySubmit(e: Event) {
    e.preventDefault();
    console.log(this.array)
  }
}
