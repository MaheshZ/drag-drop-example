import { Component,ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { SportsProfile } from '../reducers/index';
import * as RouterActions from '../actions/router';


@Component({
  selector: 'app-dnd-test',
  templateUrl: './dnd-test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DndTestComponent {
  sports_profiles: SportsProfile[];
  from: number[];
  to: number[];
  redElement = null;
  blueElement = null;

  constructor(private store: Store<AppState>) {
    store.subscribe(state => {
      this.sports_profiles = state.sportsProfiles;
      console.log('sports profiles changed', state);
    });
  }


  gotoRoot() {
    console.log('gotoRoot');
    this.store.dispatch(new RouterActions.Go({ path: ['/'] }));
  }

  onDndDrop(ev) {
    ev.preventDefault();
    console.log(this.canDrop(ev));
    if (this.canDrop(ev)) {
      this.store.dispatch({ type: 'DND', payload: { 'from': this.from, 'to': this.to } });
    } else {
      console.log('Attempting to drop across containers');
    }
    console.log('drop', ev.target);
    console.log('drop', this.blueElement);
    this.clearColors();
    this.resetState();
  }

  clearColors() {
    this.setAllChildrenColor(this.redElement, '');
    this.setAllChildrenColor(this.blueElement, '');
  }

  setAllChildrenColor(element, color) {
    if (!element) {
      return;
    }
    element.parentElement.style.backgroundColor = color;
    for (const child of element.parentElement.children) {
      child.style.backgroundColor = color;
    }
  }

  onDndDragStart(ev) {
    console.log('Moving in dnd-test', ev);
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('Text', ev.target.id);
    this.from = ev.target.id.split('_');
    console.log('dragstart: Moving ' + ev.target.id, this.from);
  }

  onDndDragOver(ev) {
    ev.preventDefault();
    console.log('drag over');
    console.log(ev.target);
    console.log('this.canDrop in dragover:' + this.canDrop(ev));
    if (!this.canDrop(ev)) {
      ev.dataTransfer.dropEffect = 'none';
      this.setAllChildrenColor(ev.target, 'red');
      this.redElement = ev.target;
    } else {
      ev.dataTransfer.dropEffect = 'move';
      this.setAllChildrenColor(ev.target, '#ACE');
      this.blueElement = ev.target;
    }
  }

  /**
   * Set the styling back to default.
   * Drag leave is a chrome specific event which
   * does not work in Mozilla.
   * @param ev the event
   */
  onDndDragLeave(ev) {
    console.log('Drag leave');
    this.clearColors();
  }


  /** this works in Mozilla but not in chrome */
  onDndDragExit(ev) {
    console.log('Drag exit');
    console.log('Drag exit', ev);
    this.clearColors();
    // this.to = null;
  }

  resetState() {
    this.from = null;
    this.to = null;
  }

  canDrop(ev): boolean {

    if (ev.target.id) {
      this.to = ev.target.id.split('_');
    } else {
      console.log('id is empty');
      return false;
    }

    console.log('Trying to drop from:' + this.from + ' to:' + this.to);
    if (this.from[0] === this.to[0]) {
      return true;
    }
    return false;
  }

}


