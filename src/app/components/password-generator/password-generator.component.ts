import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordConfigComponent } from '../password-config/password-config.component';
import { PasswordDisplayComponent } from '../password-display/password-display.component';
import { CopyButtonComponent } from '../copy-button/copy-button.component';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [CommonModule, PasswordConfigComponent, PasswordDisplayComponent, CopyButtonComponent],
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent {
  generatedPassword: string | null = null;

  onPasswordGenerated(password: string) {
    this.generatedPassword = password;
  }
}
