import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Blog</h1>
      <p>This page will display blog posts and success stories from HBCU students and alumni.</p>
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
export class BlogComponent { }