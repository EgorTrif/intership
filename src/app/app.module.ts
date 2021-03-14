import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './core/login/login.component';
import { authInterceptorProviders } from './services/auth.interceptor'
import { AddaccComponent } from './modules/add/addacc/addacc.component';
import { AdddonComponent } from './modules/add/adddon/adddon.component';
import { DondetComponent } from './modules/details/dondet/dondet.component';
import { AuthGuardService } from './services/authguard.service';
import { AccdetComponent } from './modules/details/accdet/accdet.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/home/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  entryComponents: [AddaccComponent, AdddonComponent, AccdetComponent, DondetComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule,
    MatSnackBarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [authInterceptorProviders, AuthGuardService, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
