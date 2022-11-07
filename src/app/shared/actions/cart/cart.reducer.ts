import { createReducer, on } from '@ngrx/store';
import { increment } from './cart.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1)
);
