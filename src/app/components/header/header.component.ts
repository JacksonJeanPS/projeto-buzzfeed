import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  darkMode = true;

  navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Trending', href: '#trending' },
    { label: 'Quizzes', href: '#quizz' },
    { label: 'Vídeos', href: '#videos' },
    { label: 'Culinary', href: '#culinary' }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-theme', this.darkMode);
    document.body.classList.toggle('light-theme', !this.darkMode);
  }
}
