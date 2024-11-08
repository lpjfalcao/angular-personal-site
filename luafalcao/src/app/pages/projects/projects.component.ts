import { Component } from '@angular/core';
import { ProjectGridComponent } from '../../shared/cards/project-grid/project-grid.component';
import { ProjectsService } from './projects.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectGridComponent, HttpClientModule],
  providers: [ProjectsService],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectList: any[] = []

  constructor(private projectService: ProjectsService, private router: Router) {
    
  }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((data: any) => {
      for (const project of data as any[]) {
        this.projectList.push({
          img: project.imagem,
          caption: project.nome,
          id: project.id,
          description: project.descricao,
          link: project.link,
          type: project.tipo
        });        
      }      
      this.projectList.sort((a, b) => a.id - b.id);
    })
  }

  openLink(event: any) {
    window.open(event, '_blank');
  }
}
