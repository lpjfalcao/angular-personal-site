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
  title = 'Sobre mim';
  description = `Tenho 31 anos, sou formado em Análise e Desenvolvimento de Sistemas pela Unicarioca, faço Pós-Graduação em Cloud Computing com foco em AWS na mesma instituição e tenho ${this.yearsOfExperience} anos de experiência no mercado de TI onde venho colaborando em diversos projetos para diferentes empresas.`;
  subDescription = 'Desde 2014 venho colaborando em projetos de software, com experiência como Desenvolvedor Back-end, Front-end e Full-Stack, onde tive a oportunidade de trabalhar com metodologias ágeis, incluindo Scrum e XP, e participar de projetos em diferentes segmentos, incluindo seguros, financeiro, jurídico e administrativo.';
  subDescription2 = 'Tenho experiência com o desenvolvimento de interfaces de usuário, Web APIs e aplicativos onde trabalhei com diferentes tecnologias, incluindo C#, .NET, SQL, SQL Server, AWS, Azure, GIT, HTML5, CSS3, JavaScript, Angular, Node.JS, entre outras.';
  subDescription3 = 'Algumas empresas e órgãos que atendi foram Banco Itaú, Akad Seguros, Braslight Seguros, Capemisa Seguros, Oi, PRODERJ, PROCON, Eletros, Prudential do Brasil e Personal.';
  stats = [
    { value: `${this.yearsOfExperience}+`, label: 'Anos de experiência' },
    { value: '13+', label: 'Projetos concluídos' },
    { value: '8+', label: 'Empresas onde colaborei' },
    { value: '2K', label: 'Usuários ativos' }
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
