import { Component, inject, signal } from '@angular/core';

import { Team } from 'src/app/shared/services/team/team.interface';
import { TeamService } from 'src/app/shared/services/team/team.service';

@Component({
    selector: 'app-team-list',
    imports: [],
    templateUrl: './team-list.component.html',
    styleUrl: './team-list.component.scss'
})
export class TeamListComponent {
    teams = signal<Team[]>([]);
    private teamService = inject(TeamService);

    ngOnInit() {
        this.teamService.getTeams().subscribe((teams: Team[]) => this.teams.set(teams));
    }
}
