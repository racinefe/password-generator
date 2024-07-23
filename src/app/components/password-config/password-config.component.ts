import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';


@Component({
  selector: 'app-password-config',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSliderModule],
  templateUrl: './password-config.component.html',
  styleUrls: ['./password-config.component.scss']
})
export class PasswordConfigComponent {
  @Output() passwordGenerated = new EventEmitter<string>();

  length: number = 6;
  includeUppercase: boolean = false;
  includeLowercase: boolean = false;
  includeNumbers: boolean = true;
  includeSymbols: boolean = false;


  generatePassword() {
    //Definição de variáveis do charset:
    const upperCaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseCharset = 'abcdefghijklmnopqrstuvwxyz';
    const numberCharset = '0123456789';
    const symbolCharset = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    //Condicionais para incluir conjuntos de caracteres:
    let charset = '';
    if (this.includeUppercase) charset += upperCaseCharset;
    if (this.includeLowercase) charset += lowerCaseCharset;
    if (this.includeNumbers) charset += numberCharset;
    if (this.includeSymbols) charset += symbolCharset;
    
    //Verificação se charset está vazio:
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
