import { WelcomeComponent } from './welcome.component';
import { WelcomeRouteModule } from './welcome.route';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
    imports: [WelcomeRouteModule, MaterialModule],
    declarations: [WelcomeComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class WelcomeModule {}