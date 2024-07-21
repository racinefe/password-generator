import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-display.component.html',
  styleUrls: ['./password-display.component.scss']
})
export class PasswordDisplayComponent {
  @Input() password: string | null = null;
}
