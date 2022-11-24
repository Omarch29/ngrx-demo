import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

import * as heroesListActions from './actions';
import * as heroesApiActions from './api.actions';

@Injectable()
export class HeroEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly heroService: HeroService,
        private readonly messageService: MessageService
    ) { }

    fetchHeroes$ = createEffect(() => 
        this.actions$.pipe(
            ofType(heroesListActions.heroesOpened),
            exhaustMap(() => 
                this.heroService
                    .getHeroes()
                    .pipe(
                        map(heroes => heroesApiActions.heroesFetchedSuccess({ heroes })),
                        catchError(() => of(heroesApiActions.heroesFetchedError()))
                    )
                )
            )
        );
    
    handleFetchError$ = createEffect(() =>
        this.actions$.pipe(
            ofType(heroesApiActions.heroesFetchedError),
            tap(() => this.messageService.add('Heroes fetch failed')),
            map(() => [])
        ), { dispatch: false }
    );
}