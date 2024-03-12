import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatButton,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData = {
    email: '',
    password: ''
  };
  constructor(
    private authService: AuthService,
    private router:Router
              ) {}

  login(): void {
    const { email, password } = this.userData;
    this.authService.login(email, password).subscribe(
      (user) => {
        console.log('Пользователь успешно аутентифицирован:', user);
        this.router.navigate(['/taskList'])
        // Дополнительные действия после успешной аутентификации
      },
      (error) => {
        console.error('Ошибка аутентификации:', error);
        // Дополнительные действия в случае ошибки аутентификации
      }
    );
  }
}
