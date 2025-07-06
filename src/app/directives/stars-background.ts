import { Directive, ElementRef, inject, AfterViewInit, OnDestroy, effect } from '@angular/core';
import { ThemeService } from '../services/theme';

@Directive({
  selector: '[appStarsBackground]',
  standalone: true,
})
export class StarsBackgroundDirective implements AfterViewInit, OnDestroy {
  private el: ElementRef<HTMLElement> = inject(ElementRef);
  private themeService = inject(ThemeService);
  private observer: ResizeObserver;

  constructor() {
    // Este effect se ejecutará cada vez que el tema cambie
    effect(() => {
      // Llama a this.createStars() solo si el modo oscuro cambia
      this.themeService.darkMode();
      this.createStars();
    });

    // Observador para regenerar las estrellas si el tamaño del contenedor cambia
    this.observer = new ResizeObserver(() => this.createStars());
  }

  ngAfterViewInit(): void {
    this.observer.observe(this.el.nativeElement);
    this.createStars();
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  private createStars(): void {
    const container = this.el.nativeElement;
    if (!container) return;

    // Limpiar estrellas existentes
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const starCount = 50;
    const animations = ['floatLeft', 'floatRight', 'floatUpDown'];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star-sprite'; // Usaremos esta clase de tu styles.css
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = `${Math.random() * 0.5 + 0.3}`;

      const animation = animations[Math.floor(Math.random() * animations.length)];
      const duration = Math.random() * 15 + 10;
      star.style.animation = `${animation} ${duration}s infinite ease-in-out`;
      star.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(star);
    }
  }
}