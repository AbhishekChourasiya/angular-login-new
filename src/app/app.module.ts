import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMaterialModule} from './core/material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule,  MatRippleModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { AppService } from './app.service';
import { MatTabsModule, MatTableModule } from '@angular/material';
import {APP_BASE_HREF} from '@angular/common';


import {AuthService} from './auth.service';
import {TokenStorage} from './token.storage';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MaterialModule   } from './material/material.module';
import { ChartsModule } from 'ng2-charts';
import { LiveChartComponent } from './dashboard/live-chart/live-chart.component';
import { WuiegywreComponent } from './wuiegywre/wuiegywre.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    LiveChartComponent,
    WuiegywreComponent
  ],
  imports: [
    MatSortModule,
    MatPaginatorModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatRippleModule,
    HttpClientModule,
    MatTableModule,
    BrowserModule,
    MaterialModule,
    MatTableModule,
    ChartsModule
  ],
  exports: [
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatTableModule,
    ChartsModule
  ],
  providers: [HttpClientModule, AppService, AuthService, TokenStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
