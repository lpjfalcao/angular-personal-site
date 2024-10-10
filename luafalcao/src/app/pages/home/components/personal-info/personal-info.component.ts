import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { TypingEffectComponent } from '../../../../shared/typing-effect/typing-effect.component';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule, MatGridListModule, TypingEffectComponent],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {
  yearsOfExperience: number = new Date().getFullYear() - 2014;
}
