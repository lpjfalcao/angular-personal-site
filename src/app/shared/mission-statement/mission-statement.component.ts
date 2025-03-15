import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-statement',
  standalone: true,
  imports: [],
  templateUrl: './mission-statement.component.html',
  styleUrl: './mission-statement.component.scss'
})
export class MissionStatementComponent {
  missionText = `"I use my knowledge in technology to develop solutions that add value to companies and users."`;
}
