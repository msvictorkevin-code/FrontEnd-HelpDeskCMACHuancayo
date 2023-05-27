import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

import { TicketCreateComponent } from 'app/ticket/ticket-create/ticket-create.component';
import { UsuarioCreateComponent } from 'app/usuario/usuario-create/usuario-create.component';
import { TicketListComponent } from 'app/ticket/ticket-list/ticket-list.component';
import { UsuarioListComponent } from 'app/usuario/usuario-list/usuario-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
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
    NgxChartsModule
  ],
  declarations: [
    DashboardComponent,
    NotificationsComponent,
    TicketCreateComponent,
    TicketListComponent,
    UsuarioCreateComponent,
    UsuarioListComponent
  ]
})

export class AdminLayoutModule { }
