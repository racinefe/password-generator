import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-password-display',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatCardModule],
  templateUrl: './password-display.component.html',
  styleUrls: ['./password-display.component.scss']
})
export class PasswordDisplayComponent {
  @Input() password: string | null = null;
}
