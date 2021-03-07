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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authInterceptorProviders } from './auth.interceptor'
import { AddaccComponent } from './add/addacc/addacc.component';
import { AdddonComponent } from './add/adddon/adddon.component';
import { AccdetComponent } from './details/accdet/accdet.component';
import { DondetComponent } from './details/dondet/dondet.component';
import { AuthGuardService } from './authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
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
    MatDialogModule
  ],
  providers: [authInterceptorProviders, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
