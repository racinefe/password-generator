import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { CopiedDialogComponent } from '../copied-dialog/copied-dialog.component';

@Component({
  selector: 'app-password-display',
  standalone: true,
  imports: [CommonModule,MatDialogModule,],
  templateUrl: './password-display.component.html',
  styleUrls: ['./password-display.component.scss']
})
export class PasswordDisplayComponent {
  @Input() password: string | null = null;

  copyToClipboard() {
    if (this.password) {
      navigator.clipboard.writeText(this.password).then(() => {
        this.dialog.open(CopiedDialogComponent);
      }).catch(err => {
        console.error('Erro ao copiar a senha: ', err);
      });
    }
  }
  constructor(private dialog: MatDialog) { }
}
