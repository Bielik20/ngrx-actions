import { Store, Selector } from '@ngrx/store';
export declare class NgrxSelect {
    static store: Store<any> | undefined;
    connect(store: Store<any>): void;
}
export declare function Select<TState = any, TValue = any>(selector: Selector<TState, TValue>): (target: any, name: string) => void;
export declare function Select<TState = any, TValue = any>(selectorOrFeature?: string, ...paths: string[]): (target: any, name: string) => void;
/**
 * The generated function is faster than:
 * - pluck (Observable operator)
 * - memoize (old ngrx-actions implementation)
 * - MemoizedSelector (ngrx)
 */
export declare function fastPropGetter(paths: string[]): (x: any) => any;
