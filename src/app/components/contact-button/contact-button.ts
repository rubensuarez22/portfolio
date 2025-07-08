
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
// Importamos el MÓDULO y los OBJETOS de los íconos
import { LucideAngularModule, MailIcon, CopyIcon, CheckIcon } from 'lucide-angular';
import { TranslatePipe } from '../../pipes/translate-pipe';

@Component({
  selector: 'app-contact-button',
  standalone: true,
  imports: [
    LucideAngularModule,
    ScrollFadeInDirective,
    TranslatePipe // <-- Añade la directiva a los imports
  ],
  templateUrl: './contact-button.html',
  styleUrl: './contact-button.css',
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
export class ContactButton {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;

  // Signal para el estado del botón de copiar
  copied = signal(false);
  readonly email = 'rubens221001@gmail.com';

  // Exponemos los íconos para el HTML
  readonly MailIcon = MailIcon;
  readonly CopyIcon = CopyIcon;
  readonly CheckIcon = CheckIcon;

  // Declara una signal para controlar el estado de visibilidad de la sección
  sectionVisible = signal(false); // <-- ¡NECESARIO AÑADIR ESTO!

  // Método que será llamado por la directiva ScrollFadeInDirective
  // cuando la sección entre o salga del área visible
  onSectionVisible(isVisible: boolean) { // <-- ¡NECESARIO AÑADIR ESTO!
    this.sectionVisible.set(isVisible);
  }

  handleSendEmail(): void {
    window.location.href = `mailto:${this.email}`;
  }

  handleCopyEmail(): void {
    navigator.clipboard.writeText(this.email);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000); // Vuelve al estado original después de 2 segundos
  }
}