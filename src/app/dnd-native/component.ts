import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-dnd-native',
    templateUrl: './template.html',
    styleUrls: ['./component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DnDNativeComponent {
    @Input()
    items;
    @Input()
    bag;
    /*
       Drag and drop events which are
       bubbled up
    */
    @Output()
    dndDrop = new EventEmitter();

    @Output()
    dndDragOver = new EventEmitter();

    @Output()
    dndDragStart = new EventEmitter();

    @Output()
    dndDragLeave = new EventEmitter();

    @Output()
    dndDragExit = new EventEmitter();

    rowStyle = 'grab';

    title = 'Tour of Heroes';

    dragstart(ev) {
        console.log('Drag start', ev);
        this.dndDragStart.emit(ev);
    }

    dragover(ev) {
        this.dndDragOver.emit(ev);
    }

    dragleave(ev) {
        this.dndDragLeave.emit(ev);
    }

    dragexit(ev) {
        this.dndDragExit.emit(ev);
    }

    drop(ev) {
        this.dndDrop.emit(ev);
    }


}
