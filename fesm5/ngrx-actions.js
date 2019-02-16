import { Store, StoreModule, ReducerManager, combineReducers } from '@ngrx/store';
import { Injectable, NgModule, InjectionToken, Injector, Inject, Optional } from '@angular/core';
import { materialize, filter } from 'rxjs/operators';
import { __spread, __assign, __values } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgrxSelect = /** @class */ (function () {
    function NgrxSelect() {
    }
    /**
     * @param {?} store
     * @return {?}
     */
    NgrxSelect.prototype.connect = /**
     * @param {?} store
     * @return {?}
     */
    function (store) {
        NgrxSelect.store = store;
    };
    NgrxSelect.store = undefined;
    NgrxSelect.decorators = [
        { type: Injectable }
    ];
    return NgrxSelect;
}());
/**
 * Slice state from the store.
 * @template TState, TValue
 * @param {?=} selectorOrFeature
 * @param {...?} paths
 * @return {?}
 */
function Select(selectorOrFeature) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    return function (target, name) {
        /** @type {?} */
        var selectorFnName = '__' + name + '__selector';
        /** @type {?} */
        var fn;
        // Nothing here? Use propery name as selector
        if (!selectorOrFeature) {
            selectorOrFeature = name;
        }
        // Handle string vs Selector<TState, TValue>
        if (typeof selectorOrFeature === 'string') {
            /** @type {?} */
            var propsArray = paths.length ? __spread([selectorOrFeature], paths) : selectorOrFeature.split('.');
            fn = fastPropGetter(propsArray);
        }
        else {
            fn = selectorOrFeature;
        }
        /** @type {?} */
        var createSelect = function () {
            /** @type {?} */
            var store = NgrxSelect.store;
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
    var segments = paths;
    /** @type {?} */
    var seg = 'store.' + segments[0];
    /** @type {?} */
    var i = 0;
    /** @type {?} */
    var l = segments.length;
    /** @type {?} */
    var expr = seg;
    while (++i < l) {
        expr = expr + ' && ' + (seg = seg + '.' + segments[i]);
    }
    /** @type {?} */
    var fn = new Function('store', 'return ' + expr + ';');
    return (/** @type {?} */ (fn));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGRX_ACTIONS_META = '__ngrx__actions__';
/**
 * @param {?} target
 * @return {?}
 */
function ensureStoreMetadata(target) {
    // see https://github.com/angular/angular/blob/master/packages/core/src/util/decorators.ts#L60
    if (!target.hasOwnProperty(NGRX_ACTIONS_META)) {
        /** @type {?} */
        var defaultMetadata = { actions: {}, effects: {} };
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
    var isInstance = !store.prototype;
    /** @type {?} */
    var klass = isInstance ? store.constructor : store;
    if (!klass.hasOwnProperty(NGRX_ACTIONS_META)) {
        throw new Error('A reducer can be created from a @Store decorated class only.');
    }
    /** @type {?} */
    var instance = isInstance ? store : new store();
    var _a = (/** @type {?} */ (klass[NGRX_ACTIONS_META])), initialState = _a.initialState, actions = _a.actions, effects = _a.effects;
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        /** @type {?} */
        var actionMeta = actions[action.type];
        if (actionMeta) {
            /** @type {?} */
            var result = instance[actionMeta.fn](state, action);
            if (result === undefined) {
                if (Array.isArray(state)) {
                    return __spread(state);
                }
                else {
                    return __assign({}, state);
                }
            }
            state = result;
        }
        /** @type {?} */
        var effectMeta = effects[action.type];
        if (effectMeta) {
            /** @type {?} */
            var retVal = instance[effectMeta.fn](state, action);
            if (retVal) {
                if (retVal.subscribe) {
                    retVal.pipe(materialize()).subscribe(function (res) {
                        if (res.value && NgrxSelect.store) {
                            NgrxSelect.store.dispatch(res.value);
                        }
                    });
                }
                else if (NgrxSelect.store) {
                    if (Array.isArray(retVal)) {
                        retVal.forEach(function (r) { return NgrxSelect.store && NgrxSelect.store.dispatch(r); });
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
var STORE_TOKEN = new InjectionToken('STORE_TOKEN');
/** @type {?} */
var FEATURE_STORE_TOKEN = new InjectionToken('FEATURE_STORE_TOKEN');
var NgrxActionsModule = /** @class */ (function () {
    function NgrxActionsModule(reducers, featureReducers, reducerFactory, store, parentInjector, select) {
        select.connect(store);
        if (reducers) {
            for (var key in reducers) {
                /** @type {?} */
                var klass = reducers[key];
                /** @type {?} */
                var inst = parentInjector.get(klass, new klass());
                reducerFactory.addReducer(key, createReducer(inst));
            }
        }
        if (featureReducers) {
            if (typeof featureReducers.key !== 'string') {
                featureReducers.reducers = featureReducers.key;
                featureReducers.key = undefined;
            }
            /** @type {?} */
            var mapped = {};
            for (var key in featureReducers.reducers) {
                /** @type {?} */
                var klass = featureReducers.reducers[key];
                /** @type {?} */
                var inst = parentInjector.get(klass, new klass());
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
    NgrxActionsModule.forRoot = /**
     * @param {?} reducers
     * @return {?}
     */
    function (reducers) {
        return {
            ngModule: NgrxActionsModule,
            providers: [
                {
                    provide: STORE_TOKEN,
                    useValue: reducers
                }
            ]
        };
    };
    /**
     * @param {?} key
     * @param {?=} reducers
     * @return {?}
     */
    NgrxActionsModule.forFeature = /**
     * @param {?} key
     * @param {?=} reducers
     * @return {?}
     */
    function (key, reducers) {
        return {
            ngModule: NgrxActionsModule,
            providers: [
                {
                    provide: FEATURE_STORE_TOKEN,
                    useValue: { key: key, reducers: reducers }
                }
            ]
        };
    };
    NgrxActionsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [StoreModule],
                    providers: [NgrxSelect]
                },] }
    ];
    /** @nocollapse */
    NgrxActionsModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [STORE_TOKEN,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FEATURE_STORE_TOKEN,] }] },
        { type: ReducerManager },
        { type: Store },
        { type: Injector },
        { type: NgrxSelect }
    ]; };
    return NgrxActionsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {...?} actionsKlasses
 * @return {?}
 */
function Action() {
    var actionsKlasses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actionsKlasses[_i] = arguments[_i];
    }
    return function (target, name, descriptor) {
        var e_1, _a;
        /** @type {?} */
        var meta = ensureStoreMetadata(target.constructor);
        try {
            for (var actionsKlasses_1 = __values(actionsKlasses), actionsKlasses_1_1 = actionsKlasses_1.next(); !actionsKlasses_1_1.done; actionsKlasses_1_1 = actionsKlasses_1.next()) {
                var klass = actionsKlasses_1_1.value;
                /** @type {?} */
                var inst = new klass();
                /** @type {?} */
                var type = inst.type;
                if (meta.actions[type]) {
                    throw new Error("@Action for '" + type + "' is defined multiple times in functions '" + meta.actions[type].fn + "' and '" + name + "'");
                }
                meta.actions[type] = {
                    action: klass,
                    fn: name,
                    type: type
                };
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (actionsKlasses_1_1 && !actionsKlasses_1_1.done && (_a = actionsKlasses_1.return)) _a.call(actionsKlasses_1);
            }
            finally { if (e_1) throw e_1.error; }
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
function ofAction() {
    var allowedTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedTypes[_i] = arguments[_i];
    }
    /** @type {?} */
    var allowedMap = {};
    allowedTypes.forEach(function (klass) { return (allowedMap[new klass().type] = true); });
    return filter(function (action) {
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
function Store$1(initialState) {
    if (initialState === void 0) { initialState = {}; }
    return function (target) {
        /** @type {?} */
        var meta = ensureStoreMetadata(target);
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
function Effect() {
    var effectKlasses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        effectKlasses[_i] = arguments[_i];
    }
    return function (target, name, descriptor) {
        var e_1, _a;
        /** @type {?} */
        var meta = ensureStoreMetadata(target.constructor);
        try {
            for (var effectKlasses_1 = __values(effectKlasses), effectKlasses_1_1 = effectKlasses_1.next(); !effectKlasses_1_1.done; effectKlasses_1_1 = effectKlasses_1.next()) {
                var klass = effectKlasses_1_1.value;
                /** @type {?} */
                var inst = new klass();
                /** @type {?} */
                var type = inst.type;
                if (meta.effects[type]) {
                    throw new Error("@Effect for '" + type + "' is defined multiple times in functions '" + meta.effects[type].fn + "' and '" + name + "'");
                }
                meta.effects[type] = {
                    action: klass,
                    fn: name,
                    type: type
                };
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (effectKlasses_1_1 && !effectKlasses_1_1.done && (_a = effectKlasses_1.return)) _a.call(effectKlasses_1);
            }
            finally { if (e_1) throw e_1.error; }
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