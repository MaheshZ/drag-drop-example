import {Component, ChangeDetectionStrategy} from '@angular/core';


@Component({
    selector: 'app-main',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <h1>{{title}}</h1>
    <a routerLink="/dnd-test" >Dnd Test</a>
    <router-outlet></router-outlet>`
})

export class AppComponent {
    title = 'Tour of Heroes';
}

