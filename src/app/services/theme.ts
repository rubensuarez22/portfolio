import { DOCUMENT } from '@angular/common';
import { Injectable, signal, effect, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);

  // Signal para mantener el estado actual del tema
  darkMode = signal<boolean>(true);

  constructor() {
    // Un 'effect' que reacciona a los cambios en el signal 'darkMode'
    effect(() => {
      if (this.darkMode()) {
        this.document.body.classList.add('dark-mode');
        this.document.body.classList.remove('light-mode');
      } else {
        this.document.body.classList.add('light-mode');
        this.document.body.classList.remove('dark-mode');
      }
    });
  }

  // Método para cambiar el tema
  toggleDarkMode() {
    this.darkMode.update(value => !value);
  }
}