import { Component, inject, signal, viewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Team } from 'src/app/shared/services/team/team.interface';
import { TeamService } from 'src/app/shared/services/team/team.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
    selector: 'app-team-list',
    imports: [MatCardModule, ModalComponent],
    templateUrl: './team-list.component.html',
    styleUrl: './team-list.component.scss'
})
export class TeamListComponent {
    teams = signal<Team[]>([]);
    teamSelected = signal<Team | null>(null);

    private teamService = inject(TeamService);
    private modal = viewChild<ModalComponent>('modal');

    ngOnInit(): void {
        this.teamService.getTeams().subscribe((teams: Team[]) => this.teams.set(teams));
    }

    openModal(team: Team): void {
        this.teamSelected.set(team);
        this.modal()?.open();
    }
}
