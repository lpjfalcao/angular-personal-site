import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-statement',
  standalone: true,
  imports: [],
  templateUrl: './mission-statement.component.html',
  styleUrl: './mission-statement.component.scss'
})
export class MissionStatementComponent {
  missionText = `"Eu uso o meu conhecimento em tecnologia para desenvolver soluções que agregam valor às empresas e aos usuários."`;
}
