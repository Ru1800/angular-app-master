import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scholarships',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Scholarship Opportunities</h1>
      <p>Explore scholarships available for HBCU students. To apply, please <a routerLink="/login">log in</a> or <a routerLink="/signup">create an account</a>.</p>

      <div class="card" *ngFor="let scholarship of scholarships">
        <h3>{{ scholarship.title }}</h3>
        <p>{{ scholarship.description }}</p>
        <button class="disabled" disabled>Apply (Login Required)</button>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #1a237e;
      margin-bottom: 20px;
    }
    .card {
      border: 1px solid #ccc;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 8px;
      background: #f9f9f9;
    }
    .card h3 {
      margin: 0 0 10px;
    }
    .disabled {
      background: #ccc;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: not-allowed;
    }
  `]
})
export class ScholarshipsComponent {
  scholarships = [
    {
      title: 'HBCU Academic Excellence Scholarship',
      description: 'Awarded to students who demonstrate outstanding academic performance and community involvement.'
    },
    {
      title: 'STEM Stars Award',
      description: 'Supporting underrepresented students pursuing degrees in Science, Technology, Engineering, and Math.'
    },
    {
      title: 'Future Leaders of HBCUs Grant',
      description: 'For students who show leadership potential and commitment to advancing their HBCU community.'
    }
  ];
}
