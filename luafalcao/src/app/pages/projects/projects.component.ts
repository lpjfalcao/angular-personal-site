import { Component } from '@angular/core';
import { ProjectGridComponent } from '../../shared/cards/project-grid/project-grid.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectGridComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
