import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  group: FormGroup;
  displayError!: string;

  constructor(private _authService: AuthService, private _router: Router, private _fb: FormBuilder) {

    this.group = this._fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })
  }

  login() {
    if (this.group.valid) {
      if (this._authService.login(this.group.value.username, this.group.value.password)) {
        this._router.navigate(['/exos/profile'])
      } else if (!this._authService.login(this.group.value.username, this.group.value.password)) {
        this.displayError = 'Mauvais username ou password';
      }
    }
  }

}
