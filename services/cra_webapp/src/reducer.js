import { reducer as authentication } from './authentication/reducer';
import { reducer as members } from './members/reducer';
import { reducer as talks } from './talks/reducer';
import { reducer as wishes } from './wishes/reducer';

export const rootReducer = {
    authentication,
    members,
    talks,
    wishes,
};
