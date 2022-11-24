import { Action } from "@ngrx/store";
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

interface HeroState {
    heroes: Hero[];
}

const initialState: HeroState = {
    heroes: HEROES
};

export function reducer(
    state: HeroState = initialState, 
    action: Action
    ) {
        return state;
}