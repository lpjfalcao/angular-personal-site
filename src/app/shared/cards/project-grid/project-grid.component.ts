import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './project-grid.component.html',
  styleUrl: './project-grid.component.scss'
})
export class ProjectGridComponent {
  @Input() projectList: any[] = [];
  @Output() openLinkEvent = new EventEmitter<string>();

  ngOnInit() {
  
  }

  onClick(link: string) {
    this.openLinkEvent.emit(link);
  }
}
