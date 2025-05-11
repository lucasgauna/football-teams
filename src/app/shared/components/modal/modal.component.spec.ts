import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;
    let dialog: HTMLDialogElement;
    let closeButton: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ModalComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        closeButton = fixture.debugElement.query(By.css('button')).nativeElement;
        dialog = fixture.debugElement.query(By.css('dialog')).nativeElement as HTMLDialogElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should open the modal when open() is called', () => {
        const showModalSpy = spyOn(dialog, 'showModal');
        component.open();
        expect(showModalSpy).toHaveBeenCalled();
    });

    it('should close the modal when close() is called', () => {
        const closeSpy = spyOn(dialog, 'close');
        component.close();
        expect(closeSpy).toHaveBeenCalled();
    });

    it('should close the modal when the close button is clicked', () => {
        const closeSpy = spyOn(component, 'close');
        closeButton.click();
        expect(closeSpy).toHaveBeenCalled();
    });
});
