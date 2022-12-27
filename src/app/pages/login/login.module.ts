import { FormsModule } from '@angular/forms';
import { LoginRouteModule } from './login.route';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { LoginComponent } from './login.component';

@NgModule({
    imports: [LoginRouteModule,
    FormsModule
],
    declarations: [LoginComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {}