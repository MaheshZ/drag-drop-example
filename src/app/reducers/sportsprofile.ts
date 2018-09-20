import { Action } from '@ngrx/store';
import * as Immutable from 'immutable';
import { DND } from '../actions/sportprofile';

const cricket_skills = [{ 'id': '1', 'name': 'Batting' },
            { 'id': '2', 'name': 'Bowling' },
            { 'id': '3', 'name': 'Fielding' },
            { 'id': '4', 'name': 'Leadership' },
            { 'id': '5', 'name': 'PublicRelations' }
            ];

            const hockey_skills = [{ 'id': '1', 'name': 'Dribble' },
            { 'id': '2', 'name': 'Tackle' },
            { 'id': '3', 'name': 'Corner' },
            { 'id': '4', 'name': 'Defending' },
            { 'id': '5', 'name': 'Free shots' }
            ];

export const INIT_SPORTS_PROFILES = [
    { 'name': 'Cricketer', 'competencies': cricket_skills },
    { 'name': 'Hockey Player', 'competencies': hockey_skills }
];



export function sportsProfileReducer(state, action: Action) {
     switch (action.type) {
        case 'DND':
            console.log('DND',  (action as DND).payload);
            reorder((action as DND).payload);
            console.log('State', state);
            return state;
        case 'INIT':
            console.log('state in INIT', state);

            const profiles = Immutable.fromJS(INIT_SPORTS_PROFILES);

            console.log('profiles in INIT', profiles);
            return  profiles ;

        default:
            return state;
    }



    function reorder(fromAndTo) {
        console.log('Shuffle:' , fromAndTo);
        console.log('Collection to change ', state[fromAndTo.from[0]]);
        const newCompetencies = state[fromAndTo.from[0]].competencies.slice();

        const temp = state[fromAndTo.from[0]].competencies[fromAndTo.from[1]];
        newCompetencies[fromAndTo.from[1]] = newCompetencies[fromAndTo.to[1]];
        newCompetencies[fromAndTo.to[1]] = temp;

        state[fromAndTo.from[0]].competencies = newCompetencies;
        return state;
    }
}
