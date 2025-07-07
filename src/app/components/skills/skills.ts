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
import { TranslatePipe } from '../../pipes/translate-pipe';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    ScrollFadeInDirective, 
    TranslatePipe,
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
    { name: 'skills.lang.swift', descriptionKey: 'skills.lang.swift_description', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', textColor: 'text-[#3b82f6]' }, // Solo puse un ejemplo, ajusta las URLs de iconos y descripciones si es necesario
    { name: 'skills.lang.kotlin', descriptionKey: 'skills.lang.kotlin_description', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.dart', descriptionKey: 'skills.lang.dart_description', icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.java', descriptionKey: 'skills.lang.java_description', icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.python', descriptionKey: 'skills.lang.python_description', icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.angular', descriptionKey: 'skills.lang.angular_description', icon: 'https://nodejs.org/static/images/logo.svg', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.javascript', descriptionKey: 'skills.lang.javascript_description', icon: 'https://expressjs.com/images/express-facebook-share.png', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.cpp', descriptionKey: 'skills.lang.cpp_description', icon: 'https://www.mongodb.com/assets/images/global/leaf.svg', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.sql', descriptionKey: 'skills.lang.sql_description', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.arduino', descriptionKey: 'skills.lang.arduino_description', icon: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.vhdl', descriptionKey: 'skills.lang.vhdl_description', icon: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.html', descriptionKey: 'skills.lang.html_description', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.css', descriptionKey: 'skills.lang.css_description', icon: 'URL_ICONO_CSS', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.lua', descriptionKey: 'skills.lang.lua_description', icon: 'URL_ICONO_LUA', textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.latex', descriptionKey: 'skills.lang.latex_description', icon: 'URL_ICONO_LATEX', textColor: 'text-[#3b82f6]' },
    // Herramientas
    { name: 'skills.tool.vscode', descriptionKey: 'skills.tool.vscode_description', icon: 'URL_ICONO_VSCODE', textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.xcode', descriptionKey: 'skills.tool.xcode_description', icon: 'URL_ICONO_XCODE', textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.visual_studio_community', descriptionKey: 'skills.tool.visual_studio_community_description', icon: 'URL_ICONO_VISUAL_STUDIO', textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.git_github', descriptionKey: 'skills.tool.git_github_description', icon: 'URL_ICONO_GIT_GITHUB', textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.arduino_ide', descriptionKey: 'skills.tool.arduino_ide_description', icon: 'URL_ICONO_ARDUINO_IDE', textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.excel', descriptionKey: 'skills.tool.excel_description', icon: 'URL_ICONO_EXCEL', textColor: 'text-[#3b82f6]' },
  ];
}