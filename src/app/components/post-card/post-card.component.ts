export interface Post {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  imageGradient: string;
  link: string;
  isQuiz: boolean;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() post!: Post;

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }

  onClick(): void {
    window.location.href = this.post.link;
  }
}
