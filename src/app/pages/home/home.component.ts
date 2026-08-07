import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Post } from '../../components/post-card/post-card.component';
import homePostsData from '../../../assets/data/home_posts.json';

interface HomeData {
  posts: Post[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  visiblePosts: Post[] = [];
  categories: string[] = ['Todos', 'Ciência', 'Quizzes', 'Culinária', 'Entretenimento', 'Bem-estar', 'Tecnologia'];
  selectedCategory = 'Todos';
  postsPerPage = 8;
  allLoaded = false;
  private isBrowser: boolean;

  @ViewChild('postsGrid') postsGrid!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.setupIntersectionObserver();
    }
  }

  loadPosts(): void {
    const data = homePostsData as HomeData;
    this.posts = data.posts;
    this.applyFilter();
  }

  applyFilter(): void {
    if (this.selectedCategory === 'Todos') {
      this.filteredPosts = [...this.posts];
    } else {
      this.filteredPosts = this.posts.filter(p => p.category === this.selectedCategory);
    }
    this.visiblePosts = [];
    this.allLoaded = false;
    this.postsPerPage = 8;
    this.loadMore();
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilter();
  }

  loadMore(): void {
    const start = this.visiblePosts.length;
    const end = start + this.postsPerPage;
    const newPosts = this.filteredPosts.slice(start, end);
    this.visiblePosts = [...this.visiblePosts, ...newPosts];

    if (this.visiblePosts.length >= this.filteredPosts.length) {
      this.allLoaded = true;
    }
  }

  canLoadMore(): boolean {
    return !this.allLoaded;
  }

  private setupIntersectionObserver(): void {
    const sentinel = document.createElement('div');
    sentinel.style.width = '100%';
    sentinel.style.padding = '20px';
    this.postsGrid.nativeElement.appendChild(sentinel);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && this.canLoadMore()) {
          this.loadMore();
          if (!this.canLoadMore()) {
            observer.unobserve(sentinel);
          }
        }
      });
    });

    observer.observe(sentinel);
  }
}
