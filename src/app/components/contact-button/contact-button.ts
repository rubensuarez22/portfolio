import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme';

// Importamos el MÓDULO y los OBJETOS de los íconos
import { LucideAngularModule, MailIcon, CopyIcon, CheckIcon } from 'lucide-angular';

@Component({
  selector: 'app-contact-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './contact-button.html',
  styleUrl: './contact-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush
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

  handleSendEmail(): void {
    window.location.href = `mailto:${this.email}`;
  }

  handleCopyEmail(): void {
    navigator.clipboard.writeText(this.email);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000); // Vuelve al estado original después de 2 segundos
  }
}