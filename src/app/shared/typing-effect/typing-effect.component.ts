import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  standalone: true,
  imports: [],
  templateUrl: './typing-effect.component.html',
  styleUrl: './typing-effect.component.scss'
})
export class TypingEffectComponent {
  @Input() text: string = 'Texto padrão';
  @Input() typingSpeed: number = 100;
  
  displayText: string = '';
  private index: number = 0;

  ngOnInit() {
    this.typeText();
  }

  private typeText() {
    if (this.index < this.text.length) {
      this.displayText += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }
}
