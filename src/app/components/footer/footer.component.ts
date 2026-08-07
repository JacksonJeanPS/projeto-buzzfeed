import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { label: 'GitHub', href: 'https://github.com/JacksonJeanPS', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' }
  ];
}
