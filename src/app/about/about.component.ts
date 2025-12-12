import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills = [
    { name: 'HTML', icon: 'file-earmark-code', type: 'bootstrap' },
    { name: 'CSS', icon: 'palette', type: 'bootstrap' },
    { name: 'JavaScript', icon: 'filetype-js', type: 'bootstrap' },
    { name: 'Angular', icon: '', type: 'letter' }, 
    { name: 'Bootstrap', icon: 'bootstrap', type: 'bootstrap' },
    { name: 'C# / ASP.NET', icon: 'code-slash', type: 'bootstrap' },
    { name: 'SQL Databases', icon: 'database', type: 'bootstrap' },
    { name: 'Git', icon: 'git', type: 'bootstrap' },
    { name: 'GitHub', icon: 'github', type: 'bootstrap' },
    { name: 'REST API', icon: 'server', type: 'bootstrap' }
  ];
}
