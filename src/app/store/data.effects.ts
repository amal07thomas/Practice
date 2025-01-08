import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { map, of } from "rxjs";
import { catchError,mergeMap } from "rxjs";
import { CustomerService } from "src/customer/customer.service";
import { loadData, loadDataFailure, loadDataSucces } from "./data.action";

@Injectable()
export class DataEffect {
    loadData$ = createEffect(() => 
    this.actions$.pipe(
        ofType(loadData),
        mergeMap(() =>
        this.customerService.getUsers().pipe(
            map((data) => loadDataSucces({ data})),
            catchError((error) => of(loadDataFailure({error})))
    )
    )
    )
);
constructor(private customerService : CustomerService,private actions$: Actions){}
}