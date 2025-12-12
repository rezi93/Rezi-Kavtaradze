import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import emailjs from 'emailjs-com';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, RouterModule,TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


 
  contactInfo = [
  { type: 'phone', icon: 'bi-telephone-fill', value: '+995 558 32 33 88' },
  { type: 'email', icon: 'bi-envelope-fill', value: 'reziq337@gmail.com' },
  { type: 'linkedin', icon: 'bi-linkedin', value: 'LinkedIn', link: 'https://www.linkedin.com/in/rezi-kavtaradze-64a402248/' },
  { type: 'github', icon: 'bi-github', value: 'GitHub', link: 'https://github.com/rezi93?tab=repositories' }
];


   
  copyToClipboard(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      alert(`${value} copied to clipboard!`);
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      from_name: form.value.name,
      from_email: form.value.email,
      message: form.value.message
    }, 'YOUR_PUBLIC_KEY')
    .then(res => {
      alert('Message sent successfully!');
      form.reset();
    })
    .catch(err => {
      console.error(err);
      alert('Failed to send message.');
    });
  }
}
