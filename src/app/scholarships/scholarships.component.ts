import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scholarships',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Scholarships</h1>
      <p>This page will display available scholarships for HBCU students.</p>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #1a237e;
      margin-bottom: 20px;
    }
  `]
})
export class ScholarshipsComponent { }