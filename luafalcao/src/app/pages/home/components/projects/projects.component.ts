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
   
  }

  async ngOnInit() {
    
    try {
      const projects = await this.homeService.getAllProjects();
      for(const project of projects as any)
      {
        this.mainProjects.push(project);
      }

      this.mainProjects.sort((a,b) => a.id - b.id);

      for(var i = 0; i < 3; i++)
        this.personalProjects.push(this.mainProjects.pop());
    }
    catch(err) {
      console.log(err);
    }
   }


  showProjects() {
    this.showAllProjects = true;
  }
}
