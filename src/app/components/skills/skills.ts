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
  SWIFT: 'https://cdn-icons-png.flaticon.com/512/5968/5968371.png',
  KOTLIN: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Kotlin_Icon_2021.svg/1200px-Kotlin_Icon_2021.svg.png',
  DART: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dart_logo.svg/1200px-Dart_logo.svg.png',
  JAVA: 'https://cdn-icons-png.flaticon.com/512/226/226777.png', // URL de Java
  PYTHON: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
  ANGULAR: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
  JAVASCRIPT: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  CPP: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png', // URL de C++
  SQL: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
  ARDUINO: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1200px-Arduino_Logo.svg.png', // URL de Arduino
  VHDL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/VHDL_Logo.svg/1200px-VHDL_Logo.svg.png',
  HTML: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png', // URL de HTML
  CSS: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png', // URL de CSS
  LUA: 'https://img.icons8.com/?size=512&id=42bqS7y7Ga9o&format=png', // URL de Lua
  LATEX: 'https://img.icons8.com/fluent/512/texshop.png', // URL de LaTeX
  REACT: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', // Icono de React
  NEXTJS: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg', // Icono de Next.js
  TAILWIND: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg', // Icono de Tailwind
  GIT: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', // Icono de Git
  NODEJS: 'https://nodejs.org/static/images/logo.svg', // Icono de Node.js
  EXPRESS: 'https://expressjs.com/images/express-facebook-share.png', // Icono de Express
  MONGODB: 'https://www.mongodb.com/assets/images/global/leaf.svg', // Icono de MongoDB
  POSTGRESQL: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', // Icono de PostgreSQL
  SUPABASE: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png', // Icono de Supabase
  FIREBASE: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png', // Icono de Firebase
  FIGMA: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', // Icono de Figma
  VSCODE: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png', // Icono de VS Code
  XCODE: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/c9/6c/67c96c86-06f3-1da3-5127-b29ca02c23e9/Xcode-85-220-0-4-0-0-2x-sRGB-0-0.png/1200x630bb.png', // Icono de Xcode
  VISUAL_STUDIO: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png', // Icono de Visual Studio
  ARDUINO_IDE: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1200px-Arduino_Logo.svg.png', // Icono de Arduino IDE (mismo que Arduino)
  EXCEL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png', // Icono de Excel
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
    { name: 'skills.lang.sql', descriptionKey: 'skills.lang.sql_description', icon: SKILL_ICONS.SQL, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.arduino', descriptionKey: 'skills.lang.arduino_description', icon: SKILL_ICONS.ARDUINO, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.html', descriptionKey: 'skills.lang.html_description', icon: SKILL_ICONS.HTML, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.java', descriptionKey: 'skills.lang.java_description', icon: SKILL_ICONS.JAVA, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.css', descriptionKey: 'skills.lang.css_description', icon: SKILL_ICONS.CSS, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.lua', descriptionKey: 'skills.lang.lua_description', icon: SKILL_ICONS.LUA, textColor: 'text-[#3b82f6]' },
    { name: 'skills.lang.latex', descriptionKey: 'skills.lang.latex_description', icon: SKILL_ICONS.LATEX, textColor: 'text-[#3b82f6]' },
    // Herramientas
    { name: 'skills.tool.vscode', descriptionKey: 'skills.tool.vscode_description', icon: SKILL_ICONS.VSCODE, textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.xcode', descriptionKey: 'skills.tool.xcode_description', icon: SKILL_ICONS.XCODE, textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.visual_studio_community', descriptionKey: 'skills.tool.visual_studio_community_description', icon: SKILL_ICONS.VISUAL_STUDIO, textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.git_github', descriptionKey: 'skills.tool.git_github_description', icon: SKILL_ICONS.GIT, textColor: 'text-[#3b82f6]' },
    { name: 'skills.tool.arduino_ide', descriptionKey: 'skills.tool.arduino_ide_description', icon: SKILL_ICONS.ARDUINO_IDE, textColor: 'text-[#3b82f6]' },
    ];
}