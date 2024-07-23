import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CopiedDialogComponent } from '../copied-dialog/copied-dialog.component';

@Component({
  selector: 'app-copy-button',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss']
})
export class CopyButtonComponent {
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
