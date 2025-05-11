import { Observable, of } from 'rxjs';
import { Team } from 'src/app/shared/services/team/team.interface';

export const MOCK_TEAM_SERVICE_RESPONSE = [
    {
        name: 'Club Atlético River Plate',
        motto: 'El más grande',
        logo: 'http://localhost:3000/assets/logos/river_plate_logo.png'
    }
];

export const MOCK_TEAM_SERVICE = {
    getTeams: (): Observable<Team[]> => of(MOCK_TEAM_SERVICE_RESPONSE)
};
