import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TicketListComponent } from 'app/areas/ticket/ticket-list/ticket-list.component';
import { TicketCreateComponent } from 'app/areas/ticket/ticket-create/ticket-create.component';
import { UsuarioListComponent } from 'app/areas/usuario/usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from 'app/areas/usuario/usuario-create/usuario-create.component';
// import { NotificationsComponent } from '../../areas/notifications/notifications.component';
// import { InicioSessionComponent } from 'app/security/inicio-session/inicio-session.component';
// import { TicketCreateComponent } from 'app/ticket/ticket-create/ticket-create.component';
// import { TicketListComponent } from 'app/ticket/ticket-list/ticket-list.component';
// import { UsuarioCreateComponent } from 'app/usuario/usuario-create/usuario-create.component';
// import { UsuarioListComponent } from 'app/usuario/usuario-list/usuario-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'ticket', component: TicketListComponent },
    { path: 'ticket-create', component: TicketCreateComponent },
    { path: 'usuario', component: UsuarioListComponent },
    { path: 'usuario-create', component: UsuarioCreateComponent }
];
