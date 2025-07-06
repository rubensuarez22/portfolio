import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';
import { StarsBackgroundDirective } from '../../directives/stars-background';
// Importamos el MÓDULO y los OBJETOS de los íconos
import { LucideAngularModule, MapPinIcon, FileTextIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-angular';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    StarsBackgroundDirective, // La directiva que creamos
    LucideAngularModule,     // El módulo de íconos, igual que en el Header
    TranslatePipe,
    NgClass
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;

  private http = inject(HttpClient);

  // Exponemos los objetos de los íconos para usarlos en la plantilla
  readonly MapPinIcon = MapPinIcon;
  readonly FileTextIcon = FileTextIcon;
  readonly GithubIcon = GithubIcon;
  readonly LinkedinIcon = LinkedinIcon;
  readonly MailIcon = MailIcon;


    downloadCV() {
      console.log('Botón "Descargar CV" clickeado!');
    // La ruta al archivo en la carpeta assets
    const filePath = '/cv.pdf';
    
    // Usa HttpClient para obtener el archivo como un 'blob'
    this.http.get(filePath, { responseType: 'blob' }).subscribe(blob => {
      // Crea una URL temporal para el blob
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CVRubenSuarez.pdf'; // El nombre que tendrá el archivo descargado
      
      // Simula un clic en el enlace para iniciar la descarga
      a.click();
      
      // Limpia la URL temporal
      window.URL.revokeObjectURL(url);
    });
  }
}