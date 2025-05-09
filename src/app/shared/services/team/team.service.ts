import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { API_ENDPOINTS } from 'src/app/constants/app.constants';
import { Team } from './team.interface';

@Injectable({
    providedIn: 'root'
})
export class TeamService {
    private http = inject(HttpClient);

    getTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(API_ENDPOINTS.FOOTBALL_TEAMS).pipe(
            catchError((error) => {
                console.error('Error while fetching teams:', error);
                // For now, I will just return an empty array.
                return of([]);
            })
        );
    }
}
