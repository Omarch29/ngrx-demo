import { createAction, props } from "@ngrx/store";
import { Hero } from "../hero";

export const heroesFetched = createAction(
    '[Heroes API] heroes fetched',
    props<{ heroes: Hero[] }>()
);


export const heroesFetchedSuccess = createAction(
    '[Heroes API] heroes fetched success',
    props<{ heroes: Hero[] }>()
);

export const heroesFetchedError = createAction(
    '[Heroes API] heroes fetched error',
);