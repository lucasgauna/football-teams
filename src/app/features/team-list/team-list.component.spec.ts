import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListComponent } from './team-list.component';
import { TeamService } from 'src/app/shared/services/team/team.service';
import { MOCK_TEAM_SERVICE } from 'src/test-helpers/team.service.mock';

describe('TeamListComponent', () => {
    let component: TeamListComponent;
    let fixture: ComponentFixture<TeamListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TeamListComponent],
            providers: [{ provide: TeamService, useValue: MOCK_TEAM_SERVICE }]
        }).compileComponents();

        fixture = TestBed.createComponent(TeamListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
