import { Action } from '@ngrx/store';
export class DND implements Action {
    type: 'DND';
    payload: { from: String, to: String };
}

export class INIT implements Action { type: 'INIT'; }
