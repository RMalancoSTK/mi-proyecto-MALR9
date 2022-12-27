import { UnicornsViewComponent } from './unicorns-view.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { UnicornsRouteModule } from './unicorns.route';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { UnicornsComponent } from './unicorns.component';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

// Components
import { UnicornsUpdateComponent } from './unicorns-update.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
    imports: [
        CommonModule,
        UnicornsRouteModule,
        FormsModule,
        SharedModule,
        MaterialModule,

        MatTableModule,
        MatSortModule,
        MatInputModule,
        // MatPaginatorModule,
        MatDialogModule,
        // MatButtonModule,
        // FlexLayoutModule,
        MatIconModule,
        // MatListModule,
        MatFormFieldModule,        
        MatCardModule,
        // InputDataModule
    ],
    declarations: [UnicornsComponent, UnicornsViewComponent, UnicornsUpdateComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: [UnicornsViewComponent, UnicornsUpdateComponent],
})
export class UnicornsModule {}