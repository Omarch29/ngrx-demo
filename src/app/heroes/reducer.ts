import { Action, createReducer, on } from "@ngrx/store";
import { Hero } from "../hero";
import * as heroesApiActions from './api.actions';

export interface GlobalState {
    hero: HeroState;
}

interface HeroState {
    heroes?: Hero[];
}

const initialState: HeroState = {
    heroes: undefined
};

const heroesReducer = createReducer(
    initialState,
    on(heroesApiActions.heroesFetchedSuccess, (state, {heroes}) => ({
        ...state,
        heroes: [...heroes]
    }))
);

export function reducer(
    state: HeroState | undefined, 
    action: Action
    ) {
        return heroesReducer(state, action);
}