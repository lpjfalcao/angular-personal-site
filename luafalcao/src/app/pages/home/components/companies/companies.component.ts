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
    { nome: 'First Decision', logo: 'assets/img/fd-logo.png' },
    { nome: 'ATSNET Soluções em TI', logo: 'assets/img/atsnet-logo.svg' },
    { nome: 'Infobase IT', logo: 'assets/img/infobase-logo.png' },
    { nome: 'IBM', logo: 'assets/img/ibm-logo.png' },
    { nome: 'Perlink', logo: 'assets/img/perlink-logo.png' },
    { nome: 'Alterdata Software', logo: 'assets/img/alterdata-logo.png' },
    { nome: 'Agile Content', logo: 'assets/img/agile-content.png' },
    { nome: 'Wipro', logo: 'assets/img/wipro.png' },
  ];
}
