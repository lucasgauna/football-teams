import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
    selector: 'app-modal',
    imports: [],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss'
})
export class ModalComponent {
    private modal = viewChild<ElementRef<HTMLDialogElement>>('modal');

    open(): void {
        this.modal()?.nativeElement.showModal();
    }

    close(): void {
        this.modal()?.nativeElement.close();
    }
}
