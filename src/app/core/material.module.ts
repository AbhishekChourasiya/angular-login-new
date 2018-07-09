import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
@NgModule({
    imports: [ CommonModule, MatToolbarModule , MatButtonModule , MatCardModule],
    exports: [CommonModule , MatToolbarModule , MatButtonModule , MatCardModule],
})

export class CustomMaterialModule { }

