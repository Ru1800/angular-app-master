import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service'; // adjust path if needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class AppComponent {
  title = 'HBCU HUB';
  menuActive = false;
  showHeader = true;
  isLoggedIn: boolean = false;

  constructor(private router: Router, private auth: AuthService) {
    // Update login status
    this.auth.isLoggedIn$.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });

    // Always show header regardless of login/signup page
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = true; // 👈 Always show the nav/header now
      }
    });
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.auth.logout?.(); // Call logout if defined
    this.router.navigate(['/login']);
  }
}