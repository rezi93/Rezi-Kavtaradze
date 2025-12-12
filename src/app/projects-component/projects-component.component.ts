import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects-component',
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './projects-component.component.html',
  styleUrl: './projects-component.component.scss'
})
export class ProjectsComponentComponent {
projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'Online shop built with Angular & .NET Core.',
      image: 'assets/project1.jpg'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Responsive personal portfolio with Bootstrap.',
      image: 'assets/project2.jpg'
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'Productivity app with CRUD features.',
      image: 'assets/project3.jpg'
    },
   {
      id: 4,
      title: 'Online Store',
      titleKey: 'PROJECTS.STORE_PAGE_TITLE',
      description: 'PROJECTS.STORE_PAGE_DESC',
      image: 'assets/store-page.jpg',
      link: 'https://rezi93.github.io/store-page/'
    }
  ];
}
