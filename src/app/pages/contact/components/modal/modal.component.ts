import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactServiceService } from '../../contact-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  imports: [MatDialogModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, HttpClientModule, MatSnackBarModule],
  providers: [ContactServiceService],
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  formContato: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalComponent>,
    private contactService: ContactServiceService,
    private snackBar: MatSnackBar
  ) {
    this.formContato = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      telefone: ['', Validators.maxLength(12)],
      mensagem: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  async enviar() {
    if (this.formContato.valid) {
      console.log(this.formContato.value);
      try {
        await this.contactService.sendContact(this.formContato.value).toPromise();
        this.snackBar.open('E-mail enviado com sucesso!', 'Fechar', {
          duration: 3000, // Duração em milissegundos
        });
        this.dialogRef.close();
      } catch (error) {
        this.snackBar.open('E-mail enviado com sucesso!', 'Fechar', {
          duration: 3000, // Duração em milissegundos
        });
        console.error('Erro ao enviar mensagem:', error);
        this.dialogRef.close();
      }
    }
  }

  fechar() {
    this.dialogRef.close();
  }
}
