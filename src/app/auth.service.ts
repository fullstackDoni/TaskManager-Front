import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private apiUrl = 'http://localhost:3000';
  private accessToken: string = '';

  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        // Если аутентификация прошла успешно, сохраняем токен доступа
        this.accessToken = response.access_token;
      })
    );
  }
  getAccessToken(): string {
    return this.accessToken;
  }

  register(user: User): Observable<any> {
    // Отправляем POST-запрос на сервер для регистрации нового пользователя
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']).then(r => ['/register']); // Перенаправляем пользователя на страницу входа после выхода
  }
}
