import { createAction, props } from "@ngrx/store";

export const loadData = createAction('[Data] Load');

export const loadDataSucces = createAction('[data] Load Data Success',
    props<{data:any}>()
)
export const loadDataFailure = createAction('[data] Load Data Error',
    props<{error:any}>()
)

