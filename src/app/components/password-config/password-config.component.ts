import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-config.component.html',
  styleUrls: ['./password-config.component.scss']
})
export class PasswordConfigComponent {
  @Output() passwordGenerated = new EventEmitter<string>();

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
    this.passwordGenerated.emit(generatedPassword);
  }
}
