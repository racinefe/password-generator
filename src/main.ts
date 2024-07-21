import { bootstrapApplication } from '@angular/platform-browser';

import { PasswordGeneratorComponent } from './app/components/password-generator/password-generator.component';


bootstrapApplication(PasswordGeneratorComponent)
  .catch((err) => console.error(err));
