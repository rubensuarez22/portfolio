import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMe {
  private themeService = inject(ThemeService);
  darkMode = this.themeService.darkMode;
}