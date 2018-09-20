import * as fromRouter from '@ngrx/router-store';
import {sportsProfileReducer} from './sportsprofile';


export interface SportsProfile {
    name: String;
    competencies: Competency [];
}

interface Competency {
    id: number;
    name: String;
}


export interface AppState {
    sportsProfiles: SportsProfile[];
  }


export const reducers = {
    sportsProfiles: sportsProfileReducer
};

// GOTCHA: reducer interface should match
// app state interface or it wont work
