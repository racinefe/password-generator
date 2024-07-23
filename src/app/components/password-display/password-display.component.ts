import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-password-display',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  templateUrl: './password-display.component.html',
  styleUrls: ['./password-display.component.scss']
})
export class PasswordDisplayComponent {
  @Input() password: string | null = null;
}
