import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactServiceService } from '../../contact-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  imports: [MatDialogModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, HttpClientModule],
  providers: [ContactServiceService],
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  formContato: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalComponent>,
    private contactService: ContactServiceService
  ) {
    this.formContato = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  async enviar() {
    if (this.formContato.valid) {
      console.log(this.formContato.value);
      this.contactService.sendContact(this.formContato.value)
        .subscribe((message: string) => {
          console.log(message);
          this.dialogRef.close(this.formContato.value);
        });
    }
  }

  fechar() {
    this.dialogRef.close();
  }
}
