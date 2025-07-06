// src/app/components/skills/skills.ts

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
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    ScrollFadeInDirective // <-- Añade la directiva a los imports
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
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
export class Skills {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;

  // Declara una signal para controlar el estado de visibilidad de la sección
  sectionVisible = signal(false); // <-- ¡NECESARIO AÑADIR ESTO!

  // Método que será llamado por la directiva ScrollFadeInDirective
  // cuando la sección entre o salga del área visible
  onSectionVisible(isVisible: boolean) { // <-- ¡NECESARIO AÑADIR ESTO!
    this.sectionVisible.set(isVisible);
  }

  public skills = [
    // ... (Tu array de habilidades existente) ...
    { name: 'TypeScript', description: 'JavaScript with type safety.', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', textColor: 'text-[#3b82f6]', },
    { name: 'React', description: 'JavaScript Library', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', textColor: 'text-[#3b82f6]', },
    { name: 'Next.js', description: 'React Framework', icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg', textColor: 'text-[#3b82f6]', },
    { name: 'Tailwind', description: 'Utility-first CSS', icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg', textColor: 'text-[#3b82f6]', },
    { name: 'Git', description: 'Version control', icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', textColor: 'text-[#3b82f6]', },
    { name: 'Node.js', description: 'Server language', icon: 'https://nodejs.org/static/images/logo.svg', textColor: 'text-[#3b82f6]', },
    { name: 'Express', description: 'Node.js Framework', icon: 'https://expressjs.com/images/express-facebook-share.png', textColor: 'text-[#3b82f6]', },
    { name: 'MongoDB', description: 'NoSQL Database', icon: 'https://www.mongodb.com/assets/images/global/leaf.svg', textColor: 'text-[#3b82f6]', },
    { name: 'PostgreSQL', description: 'Structured Database', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', textColor: 'text-[#3b82f6]', },
    { name: 'Supabase', description: 'Backend Service', icon: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png', textColor: 'text-[#3b82f6]', },
    { name: 'Firebase', description: 'Backend Service', icon: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png', textColor: 'text-[#3b82f6]', },
    { name: 'Figma', description: 'Design Tool', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', textColor: 'text-[#3b82f6]', },
  ];
}