import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent {
  password: string | null = null;
  length: number = 12;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;

  generatePassword() {
    const upperCaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseCharset = 'abcdefghijklmnopqrstuvwxyz';
    const numberCharset = '0123456789';
    const symbolCharset = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let charset = '';
    if (this.includeUppercase) charset += upperCaseCharset;
    if (this.includeLowercase) charset += lowerCaseCharset;
    if (this.includeNumbers) charset += numberCharset;
    if (this.includeSymbols) charset += symbolCharset;
    
    if (charset === '') {
      alert('Selecione pelo menos uma opção de caracteres.');
      return;
    }

    let generatedPassword = '';
    for (let i = 0, n = charset.length; i < this.length; ++i) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    this.password = generatedPassword;
  }

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
