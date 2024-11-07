import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../../shared/cards/project-card/project-card.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../home.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, MatIconModule, CommonModule, HttpClientModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  showAllProjects = false;
  projects: any[] = [];
  public mainProjects: any[] = [];
  public personalProjects: any[] = [];

  constructor(private homeService: HomeService) {
    console.log(`Versão 1.0.0 - ${new Date()}`);
  }

  async ngOnInit() {
    try {
      this.homeService.getAllProjects().subscribe((data) =>
      {
        this.mainProjects = data as any[]; 
        this.mainProjects.sort((a, b) => a.id - b.id);
        this.personalProjects = this.mainProjects.slice(-3); 
        this.mainProjects = this.mainProjects.slice(0, this.mainProjects.length - 3); 
      }); 
     
    } catch (err) {
      console.log(err);
    }
  }


  showProjects() {
    this.showAllProjects = true;
  }
}
