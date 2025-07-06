import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [], // No necesitamos íconos aquí
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Experience {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;

  // Signal para controlar la pestaña activa. Inicia en 'work'.
  activeTab = signal<'work' | 'education'>('work');

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