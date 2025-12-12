import { Component } from '@angular/core';
import { ThemeServiceService } from '../service/theme-service.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {

   isDark = false;

  constructor(private themeService: ThemeServiceService) {}

  ngOnInit() {
    const saved = localStorage.getItem('portfolio-theme') === 'dark';
    this.isDark = saved;
    this.themeService.setDarkTheme(this.isDark);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.themeService.setDarkTheme(this.isDark);
  }

}
