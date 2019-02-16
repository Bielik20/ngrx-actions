import { Store, StoreModule, ReducerManager, combineReducers } from '@ngrx/store';
import { Injectable, NgModule, InjectionToken, Injector, Inject, Optional } from '@angular/core';
import { materialize, filter } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgrxSelect {
    /**
     * @param {?} store
     * @return {?}
     */
    connect(store) {
        NgrxSelect.store = store;
    }
}
NgrxSelect.store = undefined;
NgrxSelect.decorators = [
    { type: Injectable }
];
/**
 * Slice state from the store.
 * @template TState, TValue
 * @param {?=} selectorOrFeature
 * @param {...?} paths
 * @return {?}
 */
function Select(selectorOrFeature, ...paths) {
    return function (target, name) {
        /** @type {?} */
        const selectorFnName = '__' + name + '__selector';
        /** @type {?} */
        let fn;
        // Nothing here? Use propery name as selector
        if (!selectorOrFeature) {
            selectorOrFeature = name;
        }
        // Handle string vs Selector<TState, TValue>
        if (typeof selectorOrFeature === 'string') {
            /** @type {?} */
            const propsArray = paths.length ? [selectorOrFeature, ...paths] : selectorOrFeature.split('.');
            fn = fastPropGetter(propsArray);
        }
        else {
            fn = selectorOrFeature;
        }
        /** @type {?} */
        const createSelect = () => {
            /** @type {?} */
            const store = NgrxSelect.store;
            if (!store) {
                throw new Error('NgrxSelect not connected to store!');
            }
            return store.select(fn);
        };
        if (target[selectorFnName]) {
            throw new Error('You cannot use @Select decorator and a ' + selectorFnName + ' property.');
        }
        // Redefine property
        if (delete target[name]) {
            Object.defineProperty(target, selectorFnName, {
                writable: true,
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(target, name, {
                get: function () {
                    return this[selectorFnName] || (this[selectorFnName] = createSelect.apply(this));
                },
                enumerable: true,
                configurable: true
            });
        }
    };
}
/**
 * The generated function is faster than:
 * - pluck (Observable operator)
 * - memoize (old ngrx-actions implementation)
 * - MemoizedSelector (ngrx)
 * @param {?} paths
 * @return {?}
 */
function fastPropGetter(paths) {
    /** @type {?} */
    const segments = paths;
    /** @type {?} */
    let seg = 'store.' + segments[0];
    /** @type {?} */
    let i = 0;
    /** @type {?} */
    const l = segments.length;
    /** @type {?} */
    let expr = seg;
    while (++i < l) {
        expr = expr + ' && ' + (seg = seg + '.' + segments[i]);
    }
    /** @type {?} */
    const fn = new Function('store', 'return ' + expr + ';');
    return (/** @type {?} */ (fn));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NGRX_ACTIONS_META = '__ngrx__actions__';
/**
 * @param {?} target
 * @return {?}
 */
function ensureStoreMetadata(target) {
    // see https://github.com/angular/angular/blob/master/packages/core/src/util/decorators.ts#L60
    if (!target.hasOwnProperty(NGRX_ACTIONS_META)) {
        /** @type {?} */
        const defaultMetadata = { actions: {}, effects: {} };
        Object.defineProperty(target, NGRX_ACTIONS_META, { value: defaultMetadata });
    }
    return target[NGRX_ACTIONS_META];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template TState
 * @param {?} store
 * @return {?}
 */
function createReducer(store) {
    /** @type {?} */
    const isInstance = !store.prototype;
    /** @type {?} */
    const klass = isInstance ? store.constructor : store;
    if (!klass.hasOwnProperty(NGRX_ACTIONS_META)) {
        throw new Error('A reducer can be created from a @Store decorated class only.');
    }
    /** @type {?} */
    const instance = isInstance ? store : new store();
    const { initialState, actions, effects } = (/** @type {?} */ (klass[NGRX_ACTIONS_META]));
    return function (state = initialState, action) {
        /** @type {?} */
        const actionMeta = actions[action.type];
        if (actionMeta) {
            /** @type {?} */
            const result = instance[actionMeta.fn](state, action);
            if (result === undefined) {
                if (Array.isArray(state)) {
                    return [...state];
                }
                else {
                    return Object.assign({}, state);
                }
            }
            state = result;
        }
        /** @type {?} */
        const effectMeta = effects[action.type];
        if (effectMeta) {
            /** @type {?} */
            const retVal = instance[effectMeta.fn](state, action);
            if (retVal) {
                if (retVal.subscribe) {
                    retVal.pipe(materialize()).subscribe(res => {
                        if (res.value && NgrxSelect.store) {
                            NgrxSelect.store.dispatch(res.value);
                        }
                    });
                }
                else if (NgrxSelect.store) {
                    if (Array.isArray(retVal)) {
                        retVal.forEach(r => NgrxSelect.store && NgrxSelect.store.dispatch(r));
                    }
                    else {
                        NgrxSelect.store.dispatch(retVal);
                    }
                }
            }
        }
        return state;
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STORE_TOKEN = new InjectionToken('STORE_TOKEN');
/** @type {?} */
const FEATURE_STORE_TOKEN = new InjectionToken('FEATURE_STORE_TOKEN');
class NgrxActionsModule {
    /**
     * @param {?} reducers
     * @param {?} featureReducers
     * @param {?} reducerFactory
     * @param {?} store
     * @param {?} parentInjector
     * @param {?} select
     */
    constructor(reducers, featureReducers, reducerFactory, store, parentInjector, select) {
        select.connect(store);
        if (reducers) {
            for (const key in reducers) {
                /** @type {?} */
                const klass = reducers[key];
                /** @type {?} */
                const inst = parentInjector.get(klass, new klass());
                reducerFactory.addReducer(key, createReducer(inst));
            }
        }
        if (featureReducers) {
            if (typeof featureReducers.key !== 'string') {
                featureReducers.reducers = featureReducers.key;
                featureReducers.key = undefined;
            }
            /** @type {?} */
            const mapped = {};
            for (const key in featureReducers.reducers) {
                /** @type {?} */
                const klass = featureReducers.reducers[key];
                /** @type {?} */
                const inst = parentInjector.get(klass, new klass());
                mapped[key] = createReducer(inst);
            }
            if (featureReducers.key) {
                reducerFactory.addFeature({
                    reducers: mapped,
                    reducerFactory: (/** @type {?} */ (combineReducers)),
                    key: featureReducers.key
                });
            }
        }
    }
    /**
     * @param {?} reducers
     * @return {?}
     */
    static forRoot(reducers) {
        return {
            ngModule: NgrxActionsModule,
            providers: [
                {
                    provide: STORE_TOKEN,
                    useValue: reducers
                }
            ]
        };
    }
    /**
     * @param {?} key
     * @param {?=} reducers
     * @return {?}
     */
    static forFeature(key, reducers) {
        return {
            ngModule: NgrxActionsModule,
            providers: [
                {
                    provide: FEATURE_STORE_TOKEN,
                    useValue: { key, reducers }
                }
            ]
        };
    }
}
NgrxActionsModule.decorators = [
    { type: NgModule, args: [{
                imports: [StoreModule],
                providers: [NgrxSelect]
            },] }
];
/** @nocollapse */
NgrxActionsModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [STORE_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FEATURE_STORE_TOKEN,] }] },
    { type: ReducerManager },
    { type: Store },
    { type: Injector },
    { type: NgrxSelect }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {...?} actionsKlasses
 * @return {?}
 */
function Action(...actionsKlasses) {
    return function (target, name, descriptor) {
        /** @type {?} */
        const meta = ensureStoreMetadata(target.constructor);
        for (const klass of actionsKlasses) {
            /** @type {?} */
            const inst = new klass();
            /** @type {?} */
            const type = inst.type;
            if (meta.actions[type]) {
                throw new Error(`@Action for '${type}' is defined multiple times in functions '${meta.actions[type].fn}' and '${name}'`);
            }
            meta.actions[type] = {
                action: klass,
                fn: name,
                type
            };
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {...?} allowedTypes
 * @return {?}
 */
function ofAction(...allowedTypes) {
    /** @type {?} */
    const allowedMap = {};
    allowedTypes.forEach(klass => (allowedMap[new klass().type] = true));
    return filter((action) => {
        return allowedMap[action.type];
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} initialState
 * @return {?}
 */
function Store$1(initialState = {}) {
    return function (target) {
        /** @type {?} */
        const meta = ensureStoreMetadata(target);
        meta.initialState = initialState;
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {...?} effectKlasses
 * @return {?}
 */
function Effect(...effectKlasses) {
    return function (target, name, descriptor) {
        /** @type {?} */
        const meta = ensureStoreMetadata(target.constructor);
        for (const klass of effectKlasses) {
            /** @type {?} */
            const inst = new klass();
            /** @type {?} */
            const type = inst.type;
            if (meta.effects[type]) {
                throw new Error(`@Effect for '${type}' is defined multiple times in functions '${meta.effects[type].fn}' and '${name}'`);
            }
            meta.effects[type] = {
                action: klass,
                fn: name,
                type
            };
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgrxActionsModule, Action, ofAction, Store$1 as Store, Select, NgrxSelect, createReducer, Effect, FEATURE_STORE_TOKEN as ɵb, STORE_TOKEN as ɵa };

//# sourceMappingURL=ngrx-actions.js.map