import { Component } from '@angular/core';
import { MissionStatementComponent } from '../../../../shared/mission-statement/mission-statement.component';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [MissionStatementComponent],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {

}
