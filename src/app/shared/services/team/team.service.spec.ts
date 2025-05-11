import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { Team } from './team.interface';
import { TeamService } from './team.service';
import { API_ENDPOINTS } from 'src/app/constants/app.constants';
import { MOCK_TEAM_SERVICE_RESPONSE } from 'src/test-helpers/team.service.mock';

describe('TeamService', () => {
    let service: TeamService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideHttpClientTesting()]
        });
        service = TestBed.inject(TeamService);
        http = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        http.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return an array of teams', () => {
        service.getTeams().subscribe((teams: Team[]) => {
            expect(teams).toEqual(MOCK_TEAM_SERVICE_RESPONSE);
        });

        const req = http.expectOne(API_ENDPOINTS.FOOTBALL_TEAMS);
        expect(req.request.method).toEqual('GET');
        req.flush(MOCK_TEAM_SERVICE_RESPONSE);
    });

    it('should return an empty array if the HTTP request fails', () => {
        service.getTeams().subscribe((teams: Team[]) => {
            expect(teams).toEqual([]);
        });

        const req = http.expectOne(API_ENDPOINTS.FOOTBALL_TEAMS);
        expect(req.request.method).toBe('GET');

        req.flush('Error fetching teams', {
            status: 500,
            statusText: 'Internal Server Error'
        });
    });
});
