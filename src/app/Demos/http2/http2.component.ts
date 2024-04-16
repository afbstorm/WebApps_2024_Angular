import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-http2',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './http2.component.html',
  styleUrl: './http2.component.scss'
})
export class Http2Component {
  loginForm: FormGroup;
  authObs!: Subscription;
  constructor(private authService: AuthService, private _fb: FormBuilder, private _router: Router) {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
     this.authObs = this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: (response) => {
            console.log('Login successful', response)
            this._router.navigate(['/demos/bindings'])
          },
          error: (error) => console.error('Login failed', error),
          complete: () => this.authObs.unsubscribe()
        });
    }
  }
}
