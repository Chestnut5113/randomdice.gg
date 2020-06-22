import {
    CLEAR_ERRORS,
    SuccessAction,
    FailureAction,
    ClearErrorAction,
} from '../types';

export const SUCCESS = 'FETCH_WIKI_SUCCESS';
export const FAIL = 'FETCH_WIKI_FAIL';

export type ActionType = typeof SUCCESS | typeof FAIL | CLEAR_ERRORS;

interface Dice {
    version: string;
    list: {
        name: string;
        desc: string;
    }[];
}

interface WikiContent {
    pvp: string;
    pve: string;
    dice: Dice;
}

export interface FetchState {
    wiki: WikiContent | undefined;
    error: firebase.FirebaseError | undefined;
}

export type Action =
    | SuccessAction<typeof SUCCESS, WikiContent>
    | FailureAction<typeof FAIL>
    | ClearErrorAction;