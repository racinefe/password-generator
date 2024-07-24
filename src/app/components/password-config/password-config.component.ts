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
  
  //variaveis para desativar e ocultar elementos
  loading: boolean = false;
  btnDisabled: boolean = false;
  alert: boolean = false;


  generatePassword() {
    //Definição de variáveis do charset:
    console.log('1');
    this.loading = true;
    this.btnDisabled = true;
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
      console.log('2');
      this.alert = true
      setTimeout(() => {
       this.alert = false;
       this.passwordGenerated.emit(generatedPassword);
      }, 5000);
    }
      console.log('3');
      let generatedPassword = '';
      for (let i = 0, n = charset.length; i < this.length; ++i) {
        generatedPassword += charset.charAt(Math.floor(Math.random() * n));
      }
    setTimeout(() => {
      this.loading = false;
      this.btnDisabled = false;
      this.passwordGenerated.emit(generatedPassword);
    }, 1000);
    
   

    
      
    
    
  }
}
