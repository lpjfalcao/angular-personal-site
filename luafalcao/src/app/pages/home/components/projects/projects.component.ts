import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../../shared/cards/project-card/project-card.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, MatIconModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  showAllProjects = false;

  showProjects() {
    this.showAllProjects = true;
  }
}
