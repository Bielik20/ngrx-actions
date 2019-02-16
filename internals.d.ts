import { ActionType } from './symbols';
export declare const NGRX_ACTIONS_META = "__ngrx__actions__";
export interface StoreMetadata {
    initialState?: any;
    actions: ActionsMeta;
    effects: ActionsMeta;
}
export interface ActionMeta {
    action: ActionType;
    fn: string;
    type: string;
}
export declare type ActionsMeta = {
    [type: string]: ActionMeta;
};
export declare function ensureStoreMetadata(target: any): StoreMetadata;
