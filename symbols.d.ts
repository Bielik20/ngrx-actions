import { Action } from '@ngrx/store';
export declare type ActionType<T extends Action = Action> = {
    new (...args: any[]): T;
};
