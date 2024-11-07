import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-grid.component.html',
  styleUrl: './project-grid.component.scss'
})
export class ProjectGridComponent {
  projectList: any[] = [];

  ngOnInit() {
    this.projectList = [
      {
        img: 'https://picsum.photos/600/480',
        caption: 'Projeto 1'
      },
      {
        img: 'https://picsum.photos/600/480',
        caption: 'Projeto 1'
      },
      {
        img: 'https://picsum.photos/600/480',
        caption: 'Projeto 1'
      },
      {
        img: 'https://picsum.photos/600/480',
        caption: 'Projeto 2'
      },
      {
        img: 'https://picsum.photos/600/480',
        caption: 'Projeto 3'
      },
      {
        img: 'https://picsum.photos/600/480',
        caption: 'Projeto 4'
      },
      {
        img: 'https://picsum.photos/600/480',
        caption: 'Projeto 5'
      },
      {
        img: 'https://picsum.photos/600/480',
        caption: 'Projeto 6'
      },
      {
        img: 'https://picsum.photos/600/480',
        caption: 'Projeto 7'
      }
    ]
  }
}
