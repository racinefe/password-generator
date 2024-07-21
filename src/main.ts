import { bootstrapApplication } from '@angular/platform-browser';

import { PasswordGeneratorComponent } from './app/components/password-generator/password-generator.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


bootstrapApplication(PasswordGeneratorComponent, {
  providers: [provideAnimationsAsync()]
})
  .catch((err) => console.error(err));
