import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {User} from "../auth.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        FormsModule,
        MatButton,
        MatFormField,
        MatInput,
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  newUser: User = {
    _id: '',
    name: '',
    email: '',
    password: ''
  };
  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.newUser).subscribe(
      () => {
        console.log('Пользователь успешно зарегистрирован');
        // Дополнительные действия после успешной регистрации
      },
      (error) => {
        console.error('Ошибка регистрации:', error);
        // Дополнительные действия в случае ошибки регистрации
      }
    );
  }

}
