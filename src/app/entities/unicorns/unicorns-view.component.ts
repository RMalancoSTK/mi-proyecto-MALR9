import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-unicorns-view',
    templateUrl: './unicorns-view.component.html'
})
export class UnicornsViewComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public unicorn: any){}
    
    ngOnInit(): void{}
}