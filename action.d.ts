import { ActionType } from './symbols';
export declare function Action(...actionsKlasses: ActionType[]): (target: any, name: string, descriptor: TypedPropertyDescriptor<any>) => void;
