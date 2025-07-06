// src/app/services/translation.service.ts
import { inject, Injectable, signal, effect, Signal } from '@angular/core'; // <-- Asegúrate de importar 'Signal'
import { HttpClient } from '@angular/common/http';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { switchMap, startWith, tap, catchError, of } from 'rxjs';

// Definimos los tipos de idioma soportados
export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root' // Para que sea un singleton global
})
export class TranslationService {
  private http = inject(HttpClient);

  currentLanguage = signal<Language>(this.getInitialLanguage());

  private _translations$ = toObservable(this.currentLanguage).pipe(
    startWith(this.currentLanguage()),
    tap(lang => console.log(`Cargando traducciones para: ${lang}`)),
    switchMap(lang =>
      this.http.get<Record<string, string>>(`/${lang}.json`).pipe(
        catchError(error => {
          console.error(`Error cargando traducciones para ${lang}:`, error);
          // ¡CAMBIO CLAVE AQUÍ! Aseguramos que el objeto vacío sea de tipo Record<string, string>
          return of({} as Record<string, string>);
        })
      )
    )
  );

  // ¡CAMBIO CLAVE AQUÍ! Declaramos explícitamente el tipo de la Signal
  translations: Signal<Record<string, string>> = toSignal(this._translations$, { initialValue: {} as Record<string, string> });

  constructor() {
    effect(() => {
      localStorage.setItem('language', this.currentLanguage());
    });
  }

  private getInitialLanguage(): Language {
    const storedLang = localStorage.getItem('language');
    if (storedLang === 'es' || storedLang === 'en') {
      return storedLang;
    }
    const browserLang = navigator.language.substring(0, 2) as Language;
    return browserLang === 'es' || browserLang === 'en' ? browserLang : 'en';
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLanguage() === 'es' ? 'en' : 'es');
  }

  getTranslation(key: string): string {
    // Aquí el acceso ya es seguro porque 'translations' es garantizado ser 'Record<string, string>'
    return this.translations()[key] || key;
  }
}