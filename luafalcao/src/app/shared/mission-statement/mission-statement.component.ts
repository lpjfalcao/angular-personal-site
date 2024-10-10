import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-statement',
  standalone: true,
  imports: [],
  templateUrl: './mission-statement.component.html',
  styleUrl: './mission-statement.component.scss'
})
export class MissionStatementComponent {
  missionText = `Eu combino meu conhecimento em tecnologia com o domínio de negócios do cliente para desenvolver soluções flexíveis, reutilizáveis, fáceis de dar manutenção e que agregam valor aos usuários.`;
}
