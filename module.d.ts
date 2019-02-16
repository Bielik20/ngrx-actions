import { InjectionToken, ModuleWithProviders, Injector } from '@angular/core';
import { Store, ReducerManager } from '@ngrx/store';
import { NgrxSelect } from './select';
export declare const STORE_TOKEN: InjectionToken<any>;
export declare const FEATURE_STORE_TOKEN: InjectionToken<any>;
export declare class NgrxActionsModule {
    static forRoot(reducers: any): ModuleWithProviders;
    static forFeature(key: any, reducers?: any): ModuleWithProviders;
    constructor(reducers: any, featureReducers: any, reducerFactory: ReducerManager, store: Store<any>, parentInjector: Injector, select: NgrxSelect);
}
