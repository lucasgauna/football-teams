import { Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'teams',
                pathMatch: 'full'
            },
            {
                path: 'teams',
                loadComponent: () => import('./features/team-list/team-list.component').then((m) => m.TeamListComponent)
            }
        ]
    }
];
