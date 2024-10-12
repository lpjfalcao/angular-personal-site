import { Component } from '@angular/core';
import { MissionStatementComponent } from '../../../../shared/mission-statement/mission-statement.component';
import { CommonModule } from '@angular/common';
import { CarouselModule, Carousel } from 'primeng/carousel';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [MissionStatementComponent, CommonModule, CarouselModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
  @ViewChild('carousel') carousel: Carousel | undefined;

  empresas = [
    { nome: 'First Decision', logo: 'assets/img/fd-logo.png', url: 'https://www.firstdecision.com.br/' },
    { nome: 'ATSNET Soluções em TI', logo: 'assets/img/atsnet-logo.svg', url: 'https://www.atsnet.com.br/' },
    { nome: 'Infobase IT', logo: 'assets/img/infobase-logo.png', url: 'https://www.infobase.com.br/' },
    { nome: 'IBM', logo: 'assets/img/ibm-logo.png', url: 'https://www.ibm.com/' },
    { nome: 'Perlink', logo: 'assets/img/perlink-logo.png', url: 'https://www.perlink.com.br/' },
    { nome: 'Alterdata Software', logo: 'assets/img/alterdata-logo.png', url: 'https://www.alterdata.com.br/' },
    { nome: 'Agile Content', logo: 'assets/img/agile-content.png', url: 'https://www.agilecontent.com/' },
    { nome: 'Wipro', logo: 'assets/img/wipro.png', url: 'https://www.wipro.com/' },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.carousel) {
        (this.carousel as any).refresh();
      }
    }, 0);
  }

  redirecionarParaEmpresa(url: string) {
    window.open(url, '_blank');
  } 
}

