import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-copy-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss']
})
export class CopyButtonComponent {
  @Input() password: string | null = null;

  copyToClipboard() {
    if (this.password) {
      navigator.clipboard.writeText(this.password).then(() => {
        alert('Senha copiada para a área de transferência!');
      }).catch(err => {
        console.error('Erro ao copiar a senha: ', err);
      });
    }
  }
}
