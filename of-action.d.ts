import { Action } from '@ngrx/store';
import { OperatorFunction } from 'rxjs';
import { ActionType } from './symbols';
export declare function ofAction<T extends Action>(allowedType: ActionType<T>): OperatorFunction<Action, T>;
export declare function ofAction<T extends Action>(...allowedTypes: ActionType[]): OperatorFunction<Action, T>;
