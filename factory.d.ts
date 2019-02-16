import { Action } from '@ngrx/store';
export declare function createReducer<TState = any>(store: {
    new (...args: any[]): any;
} | any): (state: TState, action: Action | any) => TState;
