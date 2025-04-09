import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>About HBCU HUB</h1>
      <p>HBCU HUB is a platform dedicated to supporting students at Historically Black Colleges and Universities.</p>
      <p>Our mission is to connect students with resources, scholarships, internships, and a community that helps them succeed.</p>
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
export class AboutComponent { }