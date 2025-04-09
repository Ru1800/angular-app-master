import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
  isAuthenticated = false;
  currentUser: any = null;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }

  logout() {
    // Placeholder for logout functionality
    console.log('Logout clicked');
  }
}
