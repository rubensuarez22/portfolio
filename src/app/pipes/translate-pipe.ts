// src/app/pipes/translate.pipe.ts
import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../services/translation';
@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // ¡IMPORTANTE! Para que la pipe se recalcule cuando el idioma cambie
})
export class TranslatePipe implements PipeTransform {
  private translationService = inject(TranslationService);

  transform(key: string, args?: Record<string, string>): string {
    let translatedText = this.translationService.getTranslation(key);

    // Reemplazar argumentos si se proporcionan
    if (args) {
      for (const argKey in args) {
        if (args.hasOwnProperty(argKey)) {
          translatedText = translatedText.replace(`{{${argKey}}}`, args[argKey]);
        }
      }
    }

    return translatedText;
  }
}