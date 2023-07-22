import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NotificationsComponent } from 'app/areas/notifications/notifications.component';
import { TicketCreateComponent } from 'app/areas/ticket/ticket-create/ticket-create.component';
import { TicketListComponent } from 'app/areas/ticket/ticket-list/ticket-list.component';
import { UsuarioCreateComponent } from 'app/areas/usuario/usuario-create/usuario-create.component';
import { UsuarioListComponent } from 'app/areas/usuario/usuario-list/usuario-list.component';
import { NgxToastNotifierModule } from 'ngx-toast-notifier';
import { GeneradorDatosComponent } from 'app/areas/reporte/generador-datos/generador-datos.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxChartsModule,    
    MatMenuModule,
    NgxToastNotifierModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    NotificationsComponent,
    TicketCreateComponent,
    TicketListComponent,
    UsuarioCreateComponent,
    UsuarioListComponent,
    GeneradorDatosComponent
  ]
})

export class AdminLayoutModule { }
