import { Component, Inject } from '@angular/core';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PersonalInfoComponent, ProjectsComponent, CompaniesComponent, TechnologiesComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object){

  }

  ngOnInit() {
    this.scrollToTop();
   }
 
   scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
   }
}
