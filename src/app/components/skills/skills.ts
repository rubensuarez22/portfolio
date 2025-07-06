import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [], // No se necesitan imports especiales aquí
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skills {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;

  public skills = [
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