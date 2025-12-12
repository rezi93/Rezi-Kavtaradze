import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Tech {
  name: string;
  icon: string;
}

class Particle {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;

  constructor(
    canvasWidth: number,
    canvasHeight: number,
    colors: string[]
  ) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.radius = Math.random() * 2 + 1;
    this.dx = (Math.random() - 0.5) * 0.7;
    this.dy = (Math.random() - 0.5) * 0.7;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number): void {
    this.x += this.dx;
    this.y += this.dy;
    
    if (this.x < 0 || this.x > canvasWidth) this.dx = -this.dx;
    if (this.y < 0 || this.y > canvasHeight) this.dy = -this.dy;
    
    this.draw(ctx);
  }
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private animationFrameId?: number;
  private resizeHandler?: () => void;
  private particles: Particle[] = [];
  private canvas?: HTMLCanvasElement;
  private ctx?: CanvasRenderingContext2D | null;

  techStack: Tech[] = [
    { name: 'Angular', icon: 'bi bi-code-square' },
    { name: 'TypeScript', icon: 'bi bi-filetype-ts' },
    { name: 'Bootstrap', icon: 'bi bi-bootstrap' },
    { name: 'C#', icon: 'bi bi-code-slash' },
    { name: 'ASP.NET', icon: 'bi bi-server' },
    { name: 'SCSS', icon: 'bi bi-file-earmark-code' }
  ];

  constructor(private translate: TranslateService) {
    if (!this.translate.getLangs().length) {
      this.translate.addLangs(['en', 'ka']);
      this.translate.setDefaultLang('en');
    }
  }

  ngAfterViewInit(): void {
    this.initParticles();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }

  private initParticles(): void {
    this.canvas = document.getElementById('particles-canvas') as HTMLCanvasElement;
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) return;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    const colors = ['#ffffff', '#e0f2fe', '#a5f3fc'];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      this.particles.push(
        new Particle(this.canvas.width, this.canvas.height, colors)
      );
    }

    this.resizeHandler = () => {
      if (this.canvas) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', this.resizeHandler);
    this.animate();
  }

  private connectParticles(): void {
    if (!this.ctx) return;

    const maxDistance = 120;

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 123, 255, ${1 - distance / maxDistance})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  private animate = (): void => {
    if (!this.canvas || !this.ctx) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(p => 
      p.update(this.ctx!, this.canvas!.width, this.canvas!.height)
    );
    
    this.connectParticles();
    
    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}