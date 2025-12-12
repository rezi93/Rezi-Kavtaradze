import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule, TranslateModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentLang: string = 'en';

  constructor(private translate: TranslateService) {

    const en = {
      NAV: {
        HOME: "Home",
        ABOUT: "About",
        PROJECTS: "Projects",
        CONTACT: "Contact"
      },
      HOME: {
        TITLE: "Hello, I'm Rezi",
        DESCRIPTION: "Junior Web Developer- passionate about creating modern, user-focused web applications with Angular.",
        PROJECTS_BTN: "My Projects",
        DOWNLOAD_CV: "⬇️ Download CV",
        AVAILABLE: "Open to work"
      },
      ABOUT: {
        TITLE: "About",
        DESCRIPTION: "I'm a junior web developer focused on building clean and responsive web applications. I work with Angular, TypeScript, JavaScript, HTML, CSS, and Bootstrap. I have completed few learning projects and I am improving my skills in C# and ASP.NET Core to become a full-stack developer.",
        STATS: {
          PROJECTS_TITLE: "Projects",
          PROJECTS: "4 learning projects",
          LEARNING_TITLE: "Learning",
          LEARNING: "Angular & C# / ASP.NET",
          ONGOING_TITLE: "Ongoing",
          ONGOING: "New Tools & Best Practices"
        },
        QUOTE: "I enjoy building small, responsive web apps while improving my skills every day."
      },
      PROJECTS: {
        TITLE: "Projects",
        VIEW_BTN: "View",
        ONLINE_KITCHEN_TITLE: "Online Kitchen",
        ONLINE_KITCHEN_DESC: "A web application for ordering food online. Built with Angular, SCSS, and Bootstrap technologies.",
        AUTH_APP_TITLE: "Authentication App",
        AUTH_APP_DESC: "A registration page with form validation and user authentication. User data is stored in a database. Built with Angular and C#.",
        FINAL_PROJECT_TITLE: "Portfolio Website",
        FINAL_PROJECT_DESC: "An online store page showcasing products as cards. The page is accessible only after authentication.",
        STORE_PAGE_TITLE: "Online Store",
        STORE_PAGE_DESC: "E-commerce platform with product catalog. Built with Angular 15, PrimeNG components, and Bootstrap styling."
      },
      CONTACT: {
        TITLE: "Contact Me",
        NAME: "Your Name",
        EMAIL: "Your Email",
        MESSAGE: "Message",
        SEND_BTN: "Send Message"
      }
    };

    const ka = {
      NAV: {
        HOME: "მთავარი",
        ABOUT: "ჩემ შესახებ",
        PROJECTS: "პროექტები",
        CONTACT: "კონტაქტი"
      },
      HOME: {
        TITLE: "გამარჯობა, მე ვარ რეზი",
        DESCRIPTION: "Junior Web Developer- რომელიც მოტივირებულია შექმნას თანამედროვე და მომხმარებელზე ორიენტირებული ვებ აპლიკაციები Angular-ის გამოყენებით.",
        PROJECTS_BTN: "პროექტები",
        DOWNLOAD_CV: "⬇️ რეზიუმეს ჩამოტვირთვა",
        AVAILABLE: "ხელმისაწვდომი სამუშაოდ"
      },
      ABOUT: {
        TITLE: "ჩემ შესახებ",
        DESCRIPTION: "მე ვარ Junior Web Developer, რომელიც მუშაობს Angular-ზე, TypeScript-ზე, JavaScript-ზე, HTML-სა და CSS-ზე. მაქვს რამდენიმე სასწავლო პროექტი და ვსწავლობ C#-ს, რათა გავხდე სრულფასოვანი Full-Stack დეველოპერი.",
        STATS: {
          PROJECTS_TITLE: "პროექტები",
          PROJECTS: "4 სასწავლო პროექტი",
          LEARNING_TITLE: "სწავლა",
          LEARNING: "Angular & C# / ASP.NET",
          ONGOING_TITLE: "მიმდინარე",
          ONGOING: "ახალი უნარები & მეტი პრაქტიკა"
        },
        QUOTE: "მე ვქმნი პატარა, რეაგირებად ვებ აპლიკაციებს და ყოველდღე ვაუმჯობესებ ჩემს უნარებს."
      },
      PROJECTS: {
        TITLE: "პროექტები",
        VIEW_BTN: "დეტალურად",
        ONLINE_KITCHEN_TITLE: "ონლაინ სამზარეულო",
        ONLINE_KITCHEN_DESC: "ვებ-აპლიკაცია საკვების ონლაინ შეკვეთისთვის. შექმნილია Angular, SCSS და Bootstrap ტექნოლოგიებით.",
        AUTH_APP_TITLE: "ავტორიზაციის სისტემა",
        AUTH_APP_DESC: "რეგისტრაციის გვერდი ფორმის ვალიდაციით და მომხმარებლის ავთენტიფიკაციით. მონაცემები ინახება მონაცემთა ბაზაში. შექმნილია Angular-ით და C#-ით.",
        FINAL_PROJECT_TITLE: "პორტფოლიოს ვებსაიტი",
        FINAL_PROJECT_DESC: "ონლაინ მაღაზიის გვერდი, სადაც წარმოდგენილია პროდუქცია ქარდების სახით. გვერდი ხელმისაწვდომია მხოლოდ აუთენტიკაციის შემდეგ.",
        STORE_PAGE_TITLE: "ონლაინ მაღაზია",
        STORE_PAGE_DESC: "ელექტრონული კომერციის პლატფორმა პროდუქტების კატალოგით. შექმნილია Angular 15, PrimeNG კომპონენტებით და Bootstrap სტილით."
      },
      CONTACT: {
        TITLE: "დამიკავშირდი",
        NAME: "სახელი",
        EMAIL: "ელ-ფოსტა",
        MESSAGE: "შეტყობინება",
        SEND_BTN: "გაგზავნა"
      }
    };

   
    translate.setTranslation('en', en, true);
    translate.setTranslation('ka', ka, true);
    translate.addLangs(['en', 'ka']);
    translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('lang') || 'en';
    this.currentLang = savedLang;
    translate.use(savedLang);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }
}
