import { Component } from '@angular/core';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PersonalInfoComponent, ProjectsComponent, CompaniesComponent, TechnologiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
