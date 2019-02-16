import { ActionType } from './symbols';
export declare function Effect(...effectKlasses: ActionType[]): (target: any, name: string, descriptor: TypedPropertyDescriptor<any>) => void;
