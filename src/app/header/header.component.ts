import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule,TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   currentLang: string = 'en';
  mobileMenuOpen: boolean = false;
  
  constructor(private translate: TranslateService) {
    // მიმდინარე ენის მიღება
    this.currentLang = this.translate.currentLang || 'en';
    
    // ენის ცვლილების მოსმენა
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch (error) {
      console.warn('Unable to save language preference');
    }
    
    // მობაილ მენიუს დახურვა ენის შეცვლისას
    this.mobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
