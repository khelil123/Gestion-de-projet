import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { TablesComponent } from '../../pages/tables/tables.component';
import { ServiceComponent } from 'src/app/pages/service/service.component';
import { ServicePostComponent } from 'src/app/pages/service-post/service-post.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'service-list',         component: ServiceComponent },
    { path: 'service-post',         component: ServicePostComponent },    
];

