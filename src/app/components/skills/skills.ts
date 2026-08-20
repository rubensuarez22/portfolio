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
import { TranslatePipe } from '../../pipes/translate-pipe'; // Asegúrate de la ruta correcta

// ¡NUEVO! Objeto para almacenar las URLs de los iconos de habilidades
// Puedes consolidar este objeto con el de Projects si lo exportas de un archivo compartido.
// Por ahora, lo definimos aquí para este componente.
const SKILL_ICONS = {
  SWIFT: '/icons/swift.svg',
  KOTLIN: '/icons/kotlin.svg',
  PYTHON: '/icons/python.svg',
  ANGULAR: '/icons/angular.svg',
  JAVASCRIPT: '/icons/javascript.svg',
  CPP: '/icons/cplusplus.svg',
  HTML: '/icons/html5.svg',
  CSS: '/icons/css3.svg',
  GIT: '/icons/git.svg',
  NODEJS: '/icons/nodejs.svg',
  VSCODE: '/icons/vscode.svg',
  XCODE: '/icons/xcode.svg',
  VISUAL_STUDIO: '/icons/visualstudio.svg',
};


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
  animations: [
    trigger('fadeAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => visible', [
        animate('800ms ease-out')
      ]),
      transition('visible => void', [
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class Skills {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;

  sectionVisible = signal(false);

  onSectionVisible(isVisible: boolean) {
    this.sectionVisible.set(isVisible);
  }

  public skills = [
    // Lenguajes de programación
    { name: 'skills.lang.swift', descriptionKey: 'skills.lang.swift_description', icon: SKILL_ICONS.SWIFT, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.kotlin', descriptionKey: 'skills.lang.kotlin_description', icon: SKILL_ICONS.KOTLIN, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.python', descriptionKey: 'skills.lang.python_description', icon: SKILL_ICONS.PYTHON, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.angular', descriptionKey: 'skills.lang.angular_description', icon: SKILL_ICONS.ANGULAR, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.javascript', descriptionKey: 'skills.lang.javascript_description', icon: SKILL_ICONS.JAVASCRIPT, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.cpp', descriptionKey: 'skills.lang.cpp_description', icon: SKILL_ICONS.CPP, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.html', descriptionKey: 'skills.lang.html_description', icon: SKILL_ICONS.HTML, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.css', descriptionKey: 'skills.lang.css_description', icon: SKILL_ICONS.CSS, textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.vscode', descriptionKey: 'skills.tool.vscode_description', icon: SKILL_ICONS.VSCODE, textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.xcode', descriptionKey: 'skills.tool.xcode_description', icon: SKILL_ICONS.XCODE, textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.visual_studio_community', descriptionKey: 'skills.tool.visual_studio_community_description', icon: SKILL_ICONS.VISUAL_STUDIO, textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.git_github', descriptionKey: 'skills.tool.git_github_description', icon: SKILL_ICONS.GIT, textColor: 'text-[#3b82f6]' },
  ];
}