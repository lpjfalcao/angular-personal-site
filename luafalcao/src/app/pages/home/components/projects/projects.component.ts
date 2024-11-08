import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../../shared/cards/project-card/project-card.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../home.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, MatIconModule, CommonModule, HttpClientModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  showAllProjects = false;
  projects: any[] = [];
  public mainProjects: any[] = [];
  public personalProjects: any[] = [];

  constructor(private router: Router) {
    console.log(`Versão 1.0.0 - ${new Date()}`);
  }

  ngOnInit() { 
    this.projects.push(
      {
        imagem: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/jucerja.png',
        nome: 'Portal Web JUCERJA',
        descricao: 'Enquanto estive alocado na Junta Comercial do Estado do Rio de Janeiro durante o período de 1 ano e 7 meses participei do projeto de migração tecnológica do seu Portal Web Institucional onde trabalhei com front-end criando interfaces de usuário com design responsivo em HTML5, CSS3, jQuery e ASP .NET MVC5.',
        tipo: 'FRONT-END',
        link: 'https://www.jucerja.rj.gov.br/'
      },
      {
        imagem: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/braslight.png',
        nome: 'Portal Web Braslight',
        descricao: 'Fiz a migração tecnológica do Portal Web da Braslight Seguros durante 1 ano para uma tecnologia mais moderna, onde fiquei responsável pelo desenvolvimento de APIs com ASP .NET Web API e a construção de interfaces de usuário em AngularJS, HTML5, CSS3 e JavaScript. Também trabalhei com o Umbraco para gerenciamento de conteúdo das telas e ADO .NET e SQL Server para manipulação e armazenamento dos dados.',
        tipo: 'FULL-STACK',
        link: 'https://www.braslight.com.br/v3'
      },
      {
        imagem: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/econtador.png',
        nome: 'e-Contador',
        descricao: 'Na empresa Alterdata fiquei responsável pelo desenvolvimento do app e-Contador, uma solução  para o setor contábil disponível para iPhones e iPads. Fiz a atualização do app na App Store além de implementar funcionalidades como Push Notifications usando o serviço Firebase Cloud Message, download de documentos e telemetria com uso do Google Analytics.',
        tipo: 'MOBILE',
        link: 'https://apps.apple.com/br/app/alterdata-e-contador/id1411356193'
      },
      {
        imagem: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/meuproconrj.png',
        nome: 'Meu PROCON RJ',
        descricao: 'Colaborei no desenvolvimento do app Meu PROCON RJ onde fiquei responsável pela construção de interfaces de usuário com design responsivo para plataformas Android e iOS, além de ajudar na publicação do aplicativo na App Store. Trabalhei com tecnologias como Phonegap, Cordova, HTML5, CSS3, JavaScript e Boostrap.',
        tipo: 'MOBILE',
        link: 'http://www.procon.rj.gov.br/index.php/publicacao/detalhar/1573'
      },
      {
        imagem: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/capemisa.png',
        nome: 'Portal Web Capemisa',
        descricao: 'Enquanto estive alocado na Capemisa Seguros fiquei responsável pela manutenção do seu Portal Web incluindo novos componentes na interface e fazendo integração com APIs para exibir informaçãoes relevantes para o usuário no sistema referente a locais de atendimento.',
        tipo: 'FULL-STACK',
        link: 'https://www.capemisa.com.br/'
      },
      {
        imagem: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/personal.png',
        nome: 'Personal Store',
        descricao: 'Atuei como Full-Stack em um projeto de uma loja de distribuição de conteúdo online para o cliente Argentino Personal onde atuei desenvolvendo funcionalidades em Node.js como autorização de APIs e componentes de inteface de usuário para um gerenciador de conteúdo (CMS). Além disso fiz o provisionamento de infraestrutura na AWS usando a ferramenta Terraform e publiquei aplicações usando Docker nos serviços AWS ECR e AWS ECS.',
        tipo: 'FULL-STACK',
        link: 'https://tienda.personal.com.ar/'
      }    
    )  
  }


  goToProjects() {
    this.router.navigate(['/projetos']);
  }
}
