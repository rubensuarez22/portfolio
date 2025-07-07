// src/app/components/about-me/about-me.ts

import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'; // Asegúrate de tener 'signal'
import { ThemeService } from '../../services/theme';

// Importa las funciones de animación
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

// Importa la directiva de detección de scroll (ajusta la ruta si es diferente)
import { ScrollFadeInDirective } from '../../directives/scroll-fade-in';
import { TranslatePipe } from '../../pipes/translate-pipe';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    ScrollFadeInDirective,
    TranslatePipe // <-- Añade la directiva a los imports
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Añade las animaciones aquí
  animations: [
    trigger('fadeAnimation', [
      // Estado inicial: invisible y ligeramente desplazado hacia abajo
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      // Estado final: completamente visible en su posición original
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      // Transición al entrar en la vista
      transition('void => visible', [
        animate('800ms ease-out') // Animación de 800ms con un easing suave
      ]),
      // Opcional: Transición al salir de la vista (si quieres que se desanime)
      transition('visible => void', [
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class AboutMe {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;

  // Declara una signal para controlar el estado de visibilidad de la sección
  sectionVisible = signal(false); // <-- ¡NECESARIO AÑADIR ESTO!

  // Método que será llamado por la directiva ScrollFadeInDirective
  // cuando la sección entre o salga del área visible
  onSectionVisible(isVisible: boolean) { // <-- ¡NECESARIO AÑADIR ESTO!
    this.sectionVisible.set(isVisible);
  }

  // Si tienes más lógica o propiedades en tu componente AboutMe, van aquí
}