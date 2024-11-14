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
  description = `Profissional de TI experiente e versátil, com 31 anos e uma sólida trajetória de 10 anos no mercado. Graduado em Análise e Desenvolvimento de Sistemas pela Unicarioca, atualmente aprofundando conhecimentos em Cloud Computing com foco em AWS através de uma Pós-Graduação na mesma instituição.`;
  subDescription = 'Minha carreira é marcada por uma impressionante diversidade de projetos e tecnologias. Desde 2014, venho me destacando como Desenvolvedor Back-end, Front-end e Full-Stack, trabalhando com metodologias ágeis como Scrum e XP. Minha experiência abrange setores críticos como seguros, financeiro, jurídico e administrativo, proporcionando-me uma visão holística e estratégica do desenvolvimento de software.';
  subDescription2 = 'Minha expertise técnica é abrangente e atualizada, incluindo C#, .NET, SQL, SQL Server, AWS, Azure, GIT, HTML5, CSS3, JavaScript, Angular e Node.JS. Esta versatilidade me permite criar soluções robustas e inovadoras, desde interfaces de usuário intuitivas até Web APIs complexas e aplicativos de alto desempenho.';
  subDescription3 = 'Ao longo da minha carreira, tive o privilégio de colaborar com empresas líderes de mercado e instituições renomadas, incluindo Banco Itaú, Akad Seguros, Braslight Seguros, Capemisa Seguros, Oi, JUCERJA, PRODERJ, PROCON, Eletros, Prudential do Brasil e Personal. Essas experiências não apenas aprimoraram minhas habilidades técnicas, mas também desenvolveram minha capacidade de adaptação a diferentes culturas corporativas e desafios de negócios.';
  stats = [
    { value: `+${this.yearsOfExperience}`, label: 'Anos de experiência' },
    { value: '+12', label: 'Projetos concluídos' },
    { value: '+8', label: 'Empresas onde colaborei' },
    { value: '+2K', label: 'Usuários atendidos' }
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
