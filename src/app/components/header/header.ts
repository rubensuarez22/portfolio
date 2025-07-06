import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme';

// 1. Importa el MÓDULO y los OBJETOS de los íconos
import { LucideAngularModule, MenuIcon, XIcon, GlobeIcon, SunIcon, MoonIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  // 2. Importa únicamente LucideAngularModule
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private themeService = inject(ThemeService);

  mobileMenuOpen = signal(false);
  language = signal<'es' | 'en'>('es');
  
  darkMode = this.themeService.darkMode;

  // 3. Expone los objetos de los íconos como propiedades de la clase
  readonly MenuIcon = MenuIcon;
  readonly XIcon = XIcon;
  readonly GlobeIcon = GlobeIcon;
  readonly SunIcon = SunIcon;
  readonly MoonIcon = MoonIcon;
  readonly GithubIcon = GithubIcon;
  readonly LinkedinIcon = LinkedinIcon;
  readonly MailIcon = MailIcon;

  toggleMobileMenu() {
    this.mobileMenuOpen.update((value) => !value);
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  toggleLanguage() {
    this.language.update((lang) => (lang === 'es' ? 'en' : 'es'));
  }

    scrollToSection(sectionId: string): void {
    // Si el menú móvil está abierto, ciérralo al hacer clic en un enlace.
    if (this.mobileMenuOpen()) {
      this.toggleMobileMenu();
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // Usa scrollIntoView con comportamiento suave
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Opcional: Si tienes un header fijo que oculta parte de la sección
      // const headerOffset = 80; // Ajusta este valor según la altura de tu header
      // const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      // window.scrollTo({
      //   top: elementPosition - headerOffset,
      //   behavior: 'smooth'
      // });
    }
  }

}