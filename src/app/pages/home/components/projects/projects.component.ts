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
        descricao: 'While I was allocated at the Commercial State of Rio de Janeiro for 1 year and 7 months, I participated in the technological migration project of its Institutional Web Portal where I worked with front-end creating user interfaces with design responsive in HTML5, CSS3, jQuery and ASP .NET MVC5.',
        tipo: 'FRONT-END',
        link: 'https://www.jucerja.rj.gov.br/'
      },
      {
        imagem: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/braslight.png',
        nome: 'Portal Web Braslight',
        descricao: 'I migrated the Braslight Seguros Web Portal to a more modern technology during 1 year, where I was responsible for developing APIs with ASP .NET Web API and building user interfaces in AngularJS, HTML5, CSS3 and JavaScript. I also worked with Umbraco for content management of the screens and ADO .NET and SQL Server for data manipulation and storage.',
        tipo: 'FULL-STACK',
        link: 'https://www.braslight.com.br/v3'
      },
      {
        imagem: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/econtador.png',
        nome: 'e-Contador',
        descricao: 'At Alterdata I was responsible for the development of the e-Contador app, a solution for the accounting sector available for iPhones and iPads. I updated the app in the App Store and implemented features like Push Notifications using the Firebase Cloud Message service, document downloads and telemetry with the use of Google Analytics.',
        tipo: 'MOBILE',
        link: 'https://apps.apple.com/br/app/alterdata-e-contador/id1411356193'
      },
      {
        imagem: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/meuproconrj.png',
        nome: 'Meu PROCON RJ',
        descricao: 'I collaborated in the development of the Meu PROCON RJ app where I was responsible for building user interfaces with design responsive for Android and iOS platforms, and helped in the publication of the app in the App Store. I worked with technologies like Phonegap, Cordova, HTML5, CSS3, JavaScript and Boostrap.',
        tipo: 'MOBILE',
        link: 'http://www.procon.rj.gov.br/index.php/publicacao/detalhar/1573'
      },
      {
        imagem: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/capemisa.png',
        nome: 'Portal Web Capemisa',
        descricao: 'While I was allocated at Capemisa Seguros I was responsible for the maintenance of their Web Portal including new components in the interface and integrating APIs to display relevant information to the user in the system related to service locations.',
        tipo: 'FULL-STACK',
        link: 'https://www.capemisa.com.br/'
      },
      {
        imagem: 'https://luafalcao-site-pessoal.s3.amazonaws.com/images/personal.png',
        nome: 'Personal Store',
        descricao: 'I worked as a Full-Stack in a project of an online content distribution store for the Argentinian customer Personal where I developed functionalities in Node.js like API authorization and user interface components for a content manager (CMS). In addition, I provisioned infrastructure in AWS using the Terraform tool and published applications using Docker in the AWS ECR and AWS ECS services.',
        tipo: 'FULL-STACK',
        link: 'https://tienda.personal.com.ar/'
      }    
    )  
  }


  goToProjects() {
    this.router.navigate(['/projetos']);
  }
}
