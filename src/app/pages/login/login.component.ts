import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private authService: AuthServiceService, private router:Router) { }

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  onSubmit(): void {
    if (!this.loginForm.value.email || !this.loginForm.value.password) {
      return;
    }
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        this.router.navigate(['/home']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({
          errorCode,
          errorMessage
        });
      });
  }
}
