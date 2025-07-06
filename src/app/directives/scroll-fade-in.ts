// src/app/directives/scroll-fade-in.directive.ts
import { Directive, ElementRef, inject, Output, EventEmitter, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appScrollFadeIn]',
  standalone: true,
})
export class ScrollFadeInDirective implements AfterViewInit, OnDestroy {
  private el: ElementRef = inject(ElementRef);
  private observer: IntersectionObserver | undefined;

  // Emite un evento cuando el elemento es visible
  @Output()
  elementVisible = new EventEmitter<boolean>();

  // Opcional: Umbral de visibilidad para el IntersectionObserver (0.0 a 1.0)
  @Input()
  intersectionThreshold: number = 0.1; // Por defecto, 10% visible

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.elementVisible.emit(true);
            // Si solo quieres que se anime una vez, puedes desconectar el observer aquí
            // this.observer?.disconnect();
          } else {
            // Opcional: Si quieres que se desanime al salir de la vista
            // this.elementVisible.emit(false);
          }
        });
      },
      {
        threshold: this.intersectionThreshold,
        rootMargin: '0px 0px -10% 0px' // Opcional: para que se active un poco antes de llegar al centro
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}