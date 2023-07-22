import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InicioSessionComponent } from './security/inicio-session/inicio-session.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ComponentsModule } from './core/components/components.module';
import { AdminLayoutComponent } from './areas/layouts/admin-layout/admin-layout.component';
import { NgxToastNotifierModule } from 'ngx-toast-notifier';
import { UsuarioActualizarComponent } from './areas/usuario/usuario-actualizar/usuario-actualizar.component';
import { TicketUpdateComponent } from './areas/ticket/ticket-update/ticket-update.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,  
    MatDatepickerModule,  
    MatNativeDateModule,
    NgxToastNotifierModule.forRoot(),     
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    InicioSessionComponent,
    UsuarioActualizarComponent,
    TicketUpdateComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
