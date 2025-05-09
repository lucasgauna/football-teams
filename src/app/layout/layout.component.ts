import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, RouterModule, CommonModule],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {}
