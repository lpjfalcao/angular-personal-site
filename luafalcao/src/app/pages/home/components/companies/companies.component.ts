import { Component } from '@angular/core';
import { MissionStatementComponent } from '../../../../shared/mission-statement/mission-statement.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [MissionStatementComponent, CommonModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
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

  redirecionarParaEmpresa(url: string) {
    window.open(url, '_blank');
  } 
}

