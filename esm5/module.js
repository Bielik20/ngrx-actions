/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, InjectionToken, Injector, Inject, Optional } from '@angular/core';
import { Store, StoreModule, ReducerManager, combineReducers } from '@ngrx/store';
import { NgrxSelect } from './select';
import { createReducer } from './factory';
/** @type {?} */
export var STORE_TOKEN = new InjectionToken('STORE_TOKEN');
/** @type {?} */
export var FEATURE_STORE_TOKEN = new InjectionToken('FEATURE_STORE_TOKEN');
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
export { NgrxActionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1hY3Rpb25zLyIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBdUIsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBRTFDLE1BQU0sS0FBTyxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQU0sYUFBYSxDQUFDOztBQUNqRSxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQU0scUJBQXFCLENBQUM7QUFFakY7SUE2QkUsMkJBR0UsUUFBYSxFQUdiLGVBQW9CLEVBQ3BCLGNBQThCLEVBQzlCLEtBQWlCLEVBQ2pCLGNBQXdCLEVBQ3hCLE1BQWtCO1FBRWxCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEIsSUFBSSxRQUFRLEVBQUU7WUFDWixLQUFLLElBQU0sR0FBRyxJQUFJLFFBQVEsRUFBRTs7b0JBQ3BCLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDOztvQkFDckIsSUFBSSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ25ELGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7UUFFRCxJQUFJLGVBQWUsRUFBRTtZQUNuQixJQUFJLE9BQU8sZUFBZSxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQzNDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQztnQkFDL0MsZUFBZSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7YUFDakM7O2dCQUVLLE1BQU0sR0FBRyxFQUFFO1lBQ2pCLEtBQUssSUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRTs7b0JBQ3BDLEtBQUssR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7b0JBQ3JDLElBQUksR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNuRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1lBRUQsSUFBSSxlQUFlLENBQUMsR0FBRyxFQUFFO2dCQUN2QixjQUFjLENBQUMsVUFBVSxDQUFDO29CQUN4QixRQUFRLEVBQUUsTUFBTTtvQkFDaEIsY0FBYyxFQUFFLG1CQUFLLGVBQWUsRUFBQTtvQkFDcEMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxHQUFHO2lCQUN6QixDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFuRU0seUJBQU87Ozs7SUFBZCxVQUFlLFFBQWE7UUFDMUIsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxXQUFXO29CQUNwQixRQUFRLEVBQUUsUUFBUTtpQkFDbkI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTSw0QkFBVTs7Ozs7SUFBakIsVUFBa0IsR0FBUSxFQUFFLFFBQWM7UUFDeEMsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFFBQVEsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFO2lCQUM1QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQTNCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO29CQUN0QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7aUJBQ3hCOzs7O2dEQTJCSSxRQUFRLFlBQ1IsTUFBTSxTQUFDLFdBQVc7Z0RBRWxCLFFBQVEsWUFDUixNQUFNLFNBQUMsbUJBQW1CO2dCQTFDRixjQUFjO2dCQUFsQyxLQUFLO2dCQUQwQyxRQUFRO2dCQUd2RCxVQUFVOztJQStFbkIsd0JBQUM7Q0FBQSxBQXpFRCxJQXlFQztTQXJFWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdG9yLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgU3RvcmVNb2R1bGUsIFJlZHVjZXJNYW5hZ2VyLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE5ncnhTZWxlY3QgfSBmcm9tICcuL3NlbGVjdCc7XG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnLi9mYWN0b3J5JztcblxuZXhwb3J0IGNvbnN0IFNUT1JFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPGFueT4oJ1NUT1JFX1RPS0VOJyk7XG5leHBvcnQgY29uc3QgRkVBVFVSRV9TVE9SRV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdGRUFUVVJFX1NUT1JFX1RPS0VOJyk7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtTdG9yZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW05ncnhTZWxlY3RdXG59KVxuZXhwb3J0IGNsYXNzIE5ncnhBY3Rpb25zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QocmVkdWNlcnM6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdyeEFjdGlvbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFNUT1JFX1RPS0VOLFxuICAgICAgICAgIHVzZVZhbHVlOiByZWR1Y2Vyc1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JGZWF0dXJlKGtleTogYW55LCByZWR1Y2Vycz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdyeEFjdGlvbnNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEZFQVRVUkVfU1RPUkVfVE9LRU4sXG4gICAgICAgICAgdXNlVmFsdWU6IHsga2V5LCByZWR1Y2VycyB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFNUT1JFX1RPS0VOKVxuICAgIHJlZHVjZXJzOiBhbnksXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEZFQVRVUkVfU1RPUkVfVE9LRU4pXG4gICAgZmVhdHVyZVJlZHVjZXJzOiBhbnksXG4gICAgcmVkdWNlckZhY3Rvcnk6IFJlZHVjZXJNYW5hZ2VyLFxuICAgIHN0b3JlOiBTdG9yZTxhbnk+LFxuICAgIHBhcmVudEluamVjdG9yOiBJbmplY3RvcixcbiAgICBzZWxlY3Q6IE5ncnhTZWxlY3RcbiAgKSB7XG4gICAgc2VsZWN0LmNvbm5lY3Qoc3RvcmUpO1xuXG4gICAgaWYgKHJlZHVjZXJzKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiByZWR1Y2Vycykge1xuICAgICAgICBjb25zdCBrbGFzcyA9IHJlZHVjZXJzW2tleV07XG4gICAgICAgIGNvbnN0IGluc3QgPSBwYXJlbnRJbmplY3Rvci5nZXQoa2xhc3MsIG5ldyBrbGFzcygpKTtcbiAgICAgICAgcmVkdWNlckZhY3RvcnkuYWRkUmVkdWNlcihrZXksIGNyZWF0ZVJlZHVjZXIoaW5zdCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmZWF0dXJlUmVkdWNlcnMpIHtcbiAgICAgIGlmICh0eXBlb2YgZmVhdHVyZVJlZHVjZXJzLmtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgZmVhdHVyZVJlZHVjZXJzLnJlZHVjZXJzID0gZmVhdHVyZVJlZHVjZXJzLmtleTtcbiAgICAgICAgZmVhdHVyZVJlZHVjZXJzLmtleSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFwcGVkID0ge307XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBmZWF0dXJlUmVkdWNlcnMucmVkdWNlcnMpIHtcbiAgICAgICAgY29uc3Qga2xhc3MgPSBmZWF0dXJlUmVkdWNlcnMucmVkdWNlcnNba2V5XTtcbiAgICAgICAgY29uc3QgaW5zdCA9IHBhcmVudEluamVjdG9yLmdldChrbGFzcywgbmV3IGtsYXNzKCkpO1xuICAgICAgICBtYXBwZWRba2V5XSA9IGNyZWF0ZVJlZHVjZXIoaW5zdCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmZWF0dXJlUmVkdWNlcnMua2V5KSB7XG4gICAgICAgIHJlZHVjZXJGYWN0b3J5LmFkZEZlYXR1cmUoe1xuICAgICAgICAgIHJlZHVjZXJzOiBtYXBwZWQsXG4gICAgICAgICAgcmVkdWNlckZhY3Rvcnk6IDxhbnk+Y29tYmluZVJlZHVjZXJzLFxuICAgICAgICAgIGtleTogZmVhdHVyZVJlZHVjZXJzLmtleVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==