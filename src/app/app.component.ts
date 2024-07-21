import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordGeneratorComponent],
  template: `
              <app-password-generator/>
              <router-outlet /> 
            `,
  
})
export class AppComponent {
  title = 'password-generator';
}
