import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';

// Importamos el MÓDULO y los OBJETOS de los íconos
import { LucideAngularModule, GithubIcon, ExternalLinkIcon } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule], // El módulo se encarga de los íconos
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;

  // Exponemos los objetos de los íconos para el HTML
  readonly GithubIcon = GithubIcon;
  readonly ExternalLinkIcon = ExternalLinkIcon;

  // Nuevos datos de los proyectos
  public projects = [
    {
      id: 1,
      title: 'Cloud Box',
      description:
        'Este es un servicio de almacenamiento en la nube que permite a los usuarios cargar y descargar archivos. Aquí también puedes crear carpetas y subcarpetas para organizar tus archivos.',
      image:
        'https://uploadthingy.s3.us-west-1.amazonaws.com/rbfj8Gxc4ZH18kCGRbVSri/7.jpg',
      techStack: [
        { name: 'Angular', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' },
        { name: 'Node.js', icon: 'https://nodejs.org/static/images/logo.svg' },
        { name: 'Docker', icon: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
        { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
      ],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Info Reader',
      description:
        'Esta es una aplicación web que te permite leer noticias de tecnología utilizando fuentes RSS de diferentes fuentes y almacenándolas en una base de datos. También te permite crear una cuenta de usuario y guardar tus noticias favoritas.',
      image:
        'https://uploadthingy.s3.us-west-1.amazonaws.com/44DWh1q7W1NrsEwUhWusp1/unnamed.png',
      techStack: [
        { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'Node.js', icon: 'https://nodejs.org/static/images/logo.svg' },
        { name: 'MongoDB', icon: 'https://www.mongodb.com/assets/images/global/leaf.svg' },
        { name: 'Docker', icon: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
      ],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Task Manager',
      description:
        'Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, etiquetas personalizadas y recordatorios.',
      image:
        'https://uploadthingy.s3.us-west-1.amazonaws.com/bSNhukdQKEnhKcxe2cspLj/6.jpg',
      techStack: [
        { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
        { name: 'Firebase', icon: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png' },
      ],
      demoLink: '#',
      codeLink: '#',
    },
  ];
}