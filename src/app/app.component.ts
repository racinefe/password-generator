import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordGeneratorComponent],
  template: `
            <div class="container">
              <app-password-generator/>
              <router-outlet /> 
            </div>
              
            `,
  
})
export class AppComponent {
  title = 'password-generator';
}
