import { Component } from '@angular/core';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PersonalInfoComponent, ProjectsComponent, CompaniesComponent, TechnologiesComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
