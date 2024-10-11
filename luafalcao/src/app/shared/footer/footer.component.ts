import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from '../../../app/pages/contact/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  yearsOfExperience: number = new Date().getFullYear() - 2014;

  constructor(private router: Router, private dialog: MatDialog) {
   
  }

   abrirModal() {
    this.dialog.open(ModalComponent, {
      // Opções do modal, se necessário
      width: '600px',
      // ... outras opções
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
