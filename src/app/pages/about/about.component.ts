import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../../shared/timeline/timeline.component';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TimelineComponent, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  yearsOfExperience = new Date().getFullYear() - 2014;
  title = 'About me';
  description = `Experienced and versatile professional, with 31 years and a solid trajectory of 10 years in the market. Graduated in Systems Analysis and Development from Unicarioca, currently deepening knowledge in Cloud Computing with a focus on AWS through a Post-Graduation at the same institution.`;
  subDescription = 'My career is marked by an impressive diversity of projects and technologies. Since 2014, I have been standing out as a Back-end, Front-end and Full-Stack Developer, working with agile methodologies like Scrum and XP. My experience covers critical sectors such as insurance, finance, legal and administrative, providing me with a holistic and strategic vision of software development.';
  subDescription2 = 'My technical expertise is comprehensive and up-to-date, including C#, .NET, SQL, SQL Server, AWS, Azure, Docker, GIT, HTML5, CSS3, JavaScript, Angular and Node.JS. This versatility allows me to create robust and innovative solutions, from intuitive user interfaces to complex Web APIs and high-performance applications.';
  subDescription3 = 'Throughout my career, I have had the privilege of collaborating with leading market companies and renowned institutions, including IBM, Wipro, Banco Itaú, Akad Seguros, Braslight Seguros, Capemisa Seguros, Oi, JUCERJA, PRODERJ, PROCON, Eletros, Prudential do Brasil and Personal. These experiences not only improved my technical skills but also developed my ability to adapt to different corporate cultures and business challenges.';
  stats = [
    { value: `+${this.yearsOfExperience - 1}`, label: 'Years of experience' },
    { value: '+12', label: 'Completed projects' },
    { value: '+9', label: 'Companies I collaborated with' },
    { value: '+2K', label: 'Users served' }
  ];
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object){

  }
  ngOnInit() {
    this.scrollToTop();
   }
 
   scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
   }

   openResume() {
    window.open('https://luafalcao-resume.s3.us-west-1.amazonaws.com/Lua-Falcao-Resume.pdf', '_blank');
  }
}
