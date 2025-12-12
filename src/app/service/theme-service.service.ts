import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

   private themeKey = 'portfolio-theme';

  setDarkTheme(enabled: boolean) {
    const body = document.body;
    if (enabled) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
    localStorage.setItem(this.themeKey, enabled ? 'dark' : 'light');
  }

  loadStoredTheme() {
    const saved = localStorage.getItem(this.themeKey);
    this.setDarkTheme(saved === 'dark');
  }

  constructor() { }
}
