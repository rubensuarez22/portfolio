// src/app/components/experience/experience.ts

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
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    ScrollFadeInDirective // <-- Añade la directiva a los imports
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
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
export class Experience {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;

  // Signal para controlar la pestaña activa. Inicia en 'work'.
  activeTab = signal<'work' | 'education'>('work');

  // Declara una signal para controlar el estado de visibilidad de la sección
  sectionVisible = signal(false); // <-- ¡NECESARIO AÑADIR ESTO!

  // Método que será llamado por la directiva ScrollFadeInDirective
  // cuando la sección entre o salga del área visible
  onSectionVisible(isVisible: boolean) { // <-- ¡NECESARIO AÑADIR ESTO!
    this.sectionVisible.set(isVisible);
  }

  workExperience = [
    {
      id: 1,
      period: 'Ene 2022 - Presente',
      company: 'Tech Solutions',
      role: 'Senior Software Developer',
      description: 'Desarrollo de aplicaciones web utilizando React, Node.js y AWS. Liderazgo de equipo de 5 desarrolladores.',
      logo: 'https://uploadthingy.s3.us-west-1.amazonaws.com/dL7v3Ff9Rt1JRkUJwKgSBw/2.png',
    },
    {
      id: 2,
      period: 'Mar 2020 - Dic 2021',
      company: 'Digital Innovations',
      role: 'Frontend Developer',
      description: 'Implementación de interfaces de usuario con React y TypeScript. Optimización de rendimiento y accesibilidad.',
      logo: 'https://uploadthingy.s3.us-west-1.amazonaws.com/dL7v3Ff9Rt1JRkUJwKgSBw/2.png',
    },
    {
      id: 3,
      period: 'Jun 2018 - Feb 2020',
      company: 'Web Creators',
      role: 'Junior Developer',
      description: 'Desarrollo de sitios web responsivos utilizando HTML, CSS y JavaScript. Colaboración con diseñadores y clientes.',
      logo: 'https://uploadthingy.s3.us-west-1.amazonaws.com/dL7v3Ff9Rt1JRkUJwKgSBw/2.png',
    },
  ];

  education = [
    {
      id: 1,
      period: '2016 - 2020',
      institution: 'Universidad Tecnológica',
      degree: 'Ingeniería en Sistemas Computacionales',
      description: 'Especialización en desarrollo de software y sistemas distribuidos.',
      logo: 'https://uploadthingy.s3.us-west-1.amazonaws.com/dL7v3Ff9Rt1JRkUJwKgSBw/2.png',
    },
    {
      id: 2,
      period: '2021',
      institution: 'Platzi',
      degree: 'Desarrollo Web Frontend',
      description: 'Certificación en desarrollo web con React y tecnologías modernas.',
      logo: 'https://uploadthingy.s3.us-west-1.amazonaws.com/dL7v3Ff9Rt1JRkUJwKgSBw/2.png',
    },
  ];
}