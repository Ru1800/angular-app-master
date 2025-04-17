import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-chat',
  standalone: true,
  imports: [CommonModule, FormsModule], // ← ADD THIS LINE
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogChatComponent {
  messages: { sender: string, text: string }[] = [];
  userInput: string = '';

  sendMessage(): void {
    const input = this.userInput.trim();
    if (!input) return;

    this.messages.push({ sender: 'user', text: input });

    const response = this.getBotResponse(input);
    this.messages.push({ sender: 'bot', text: response });

    this.userInput = '';
  }

  getBotResponse(input: string): string {
    const lower = input.toLowerCase();

    if (lower.includes('scholarship')) {
      return "HBCU HUB helps you find verified scholarships tailored to HBCU students.";
    } else if (lower.includes('internship')) {
      return "We list internships updated daily — filter by major, location, and more.";
    } else if (lower.includes('team') || lower.includes('founder')) {
      return "Our team consists of AAMU students who built this during a hackathon in 2024!";
    } else if (lower.includes('future') || lower.includes('plans')) {
      return "We're working on a mobile app, AI recommendations, and virtual career fairs.";
    }

    return "That's a great question! We're always updating our blog with new info — stay tuned!";
  }
}


