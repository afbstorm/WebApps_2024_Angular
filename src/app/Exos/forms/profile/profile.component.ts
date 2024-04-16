import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {InputTextareaModule} from "primeng/inputtextarea";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, InputTextareaModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  profileInfos: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.profileInfos = this._fb.group({
      lastname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      firstname: this._fb.array([
        [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
      ]),
      email: [null, [Validators.required, Validators.email]],
      pseudo: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      address: this._fb.group({
        street: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        numero: [null, [Validators.required, Validators.maxLength(3)]],
        city: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        cp: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
      }),
      jobTitle: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      jobDescription: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
    })
  }

  getFirstnameArray(): FormArray {
    return this.profileInfos.get('firstname') as FormArray
  }

  addFirstname(): void {
    this.getFirstnameArray().push(this._fb.control(
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
    ))
  }

  removeFirstname(index: number): void {
    this.getFirstnameArray().removeAt(index);
  }

  submitProfileForm(e: Event) {
    e.preventDefault();
    if (this.profileInfos.valid) {
      console.log(this.profileInfos.value);
    }
  }

}
