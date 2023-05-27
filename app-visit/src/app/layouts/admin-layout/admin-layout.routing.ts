import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { InicioSessionComponent } from 'app/inicio-session/inicio-session.component';
import { TicketCreateComponent } from 'app/ticket/ticket-create/ticket-create.component';
import { TicketListComponent } from 'app/ticket/ticket-list/ticket-list.component';
import { UsuarioCreateComponent } from 'app/usuario/usuario-create/usuario-create.component';
import { UsuarioListComponent } from 'app/usuario/usuario-list/usuario-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'ticket', component: TicketListComponent },
    { path: 'ticket-create', component: TicketCreateComponent },
    { path: 'usuario', component: UsuarioListComponent },
    { path: 'usuario-create', component: UsuarioCreateComponent }
];
