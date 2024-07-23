import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-copied-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './copied-dialog.component.html',
  styleUrl: './copied-dialog.component.scss'
})
export class CopiedDialogComponent {

}
