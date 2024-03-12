import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet, Router} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbar, MatButton, RouterLink, MatSelectionList, MatListOption, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';

  constructor(protected authService: AuthService, private router: Router) {
  }

  logout() {
    this.authService.logout();
  }
}
