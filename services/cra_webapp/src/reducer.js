import { reducer as talks } from './talks/reducer';
import { reducer as members } from './members/reducer';
import { reducer as wishes } from './wishes/reducer';

export const rootReducer = {
    members,
    talks,
    wishes,
};
