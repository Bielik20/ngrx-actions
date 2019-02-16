/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, InjectionToken, Injector, Inject, Optional } from '@angular/core';
import { Store, StoreModule, ReducerManager, combineReducers } from '@ngrx/store';
import { NgrxSelect } from './select';
import { createReducer } from './factory';
/** @type {?} */
export const STORE_TOKEN = new InjectionToken('STORE_TOKEN');
/** @type {?} */
export const FEATURE_STORE_TOKEN = new InjectionToken('FEATURE_STORE_TOKEN');
export class NgrxActionsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1hY3Rpb25zLyIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBdUIsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBRTFDLE1BQU0sT0FBTyxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQU0sYUFBYSxDQUFDOztBQUNqRSxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQU0scUJBQXFCLENBQUM7QUFNakYsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7O0lBeUI1QixZQUdFLFFBQWEsRUFHYixlQUFvQixFQUNwQixjQUE4QixFQUM5QixLQUFpQixFQUNqQixjQUF3QixFQUN4QixNQUFrQjtRQUVsQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRCLElBQUksUUFBUSxFQUFFO1lBQ1osS0FBSyxNQUFNLEdBQUcsSUFBSSxRQUFRLEVBQUU7O3NCQUNwQixLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7c0JBQ3JCLElBQUksR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNuRCxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNyRDtTQUNGO1FBRUQsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxPQUFPLGVBQWUsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO2dCQUMzQyxlQUFlLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUM7Z0JBQy9DLGVBQWUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO2FBQ2pDOztrQkFFSyxNQUFNLEdBQUcsRUFBRTtZQUNqQixLQUFLLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUU7O3NCQUNwQyxLQUFLLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7O3NCQUNyQyxJQUFJLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztZQUVELElBQUksZUFBZSxDQUFDLEdBQUcsRUFBRTtnQkFDdkIsY0FBYyxDQUFDLFVBQVUsQ0FBQztvQkFDeEIsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLGNBQWMsRUFBRSxtQkFBSyxlQUFlLEVBQUE7b0JBQ3BDLEdBQUcsRUFBRSxlQUFlLENBQUMsR0FBRztpQkFDekIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7Ozs7O0lBbkVELE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBYTtRQUMxQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFFBQVEsRUFBRSxRQUFRO2lCQUNuQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBUSxFQUFFLFFBQWM7UUFDeEMsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUU7aUJBQzVCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBM0JGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ3RCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQzthQUN4Qjs7Ozs0Q0EyQkksUUFBUSxZQUNSLE1BQU0sU0FBQyxXQUFXOzRDQUVsQixRQUFRLFlBQ1IsTUFBTSxTQUFDLG1CQUFtQjtZQTFDRixjQUFjO1lBQWxDLEtBQUs7WUFEMEMsUUFBUTtZQUd2RCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3RvciwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIFN0b3JlTW9kdWxlLCBSZWR1Y2VyTWFuYWdlciwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBOZ3J4U2VsZWN0IH0gZnJvbSAnLi9zZWxlY3QnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJy4vZmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBTVE9SRV9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdTVE9SRV9UT0tFTicpO1xuZXhwb3J0IGNvbnN0IEZFQVRVUkVfU1RPUkVfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48YW55PignRkVBVFVSRV9TVE9SRV9UT0tFTicpO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU3RvcmVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtOZ3J4U2VsZWN0XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4QWN0aW9uc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KHJlZHVjZXJzOiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5ncnhBY3Rpb25zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBTVE9SRV9UT0tFTixcbiAgICAgICAgICB1c2VWYWx1ZTogcmVkdWNlcnNcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yRmVhdHVyZShrZXk6IGFueSwgcmVkdWNlcnM/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5ncnhBY3Rpb25zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBGRUFUVVJFX1NUT1JFX1RPS0VOLFxuICAgICAgICAgIHVzZVZhbHVlOiB7IGtleSwgcmVkdWNlcnMgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChTVE9SRV9UT0tFTilcbiAgICByZWR1Y2VyczogYW55LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChGRUFUVVJFX1NUT1JFX1RPS0VOKVxuICAgIGZlYXR1cmVSZWR1Y2VyczogYW55LFxuICAgIHJlZHVjZXJGYWN0b3J5OiBSZWR1Y2VyTWFuYWdlcixcbiAgICBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwYXJlbnRJbmplY3RvcjogSW5qZWN0b3IsXG4gICAgc2VsZWN0OiBOZ3J4U2VsZWN0XG4gICkge1xuICAgIHNlbGVjdC5jb25uZWN0KHN0b3JlKTtcblxuICAgIGlmIChyZWR1Y2Vycykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVkdWNlcnMpIHtcbiAgICAgICAgY29uc3Qga2xhc3MgPSByZWR1Y2Vyc1trZXldO1xuICAgICAgICBjb25zdCBpbnN0ID0gcGFyZW50SW5qZWN0b3IuZ2V0KGtsYXNzLCBuZXcga2xhc3MoKSk7XG4gICAgICAgIHJlZHVjZXJGYWN0b3J5LmFkZFJlZHVjZXIoa2V5LCBjcmVhdGVSZWR1Y2VyKGluc3QpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmVhdHVyZVJlZHVjZXJzKSB7XG4gICAgICBpZiAodHlwZW9mIGZlYXR1cmVSZWR1Y2Vycy5rZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZlYXR1cmVSZWR1Y2Vycy5yZWR1Y2VycyA9IGZlYXR1cmVSZWR1Y2Vycy5rZXk7XG4gICAgICAgIGZlYXR1cmVSZWR1Y2Vycy5rZXkgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hcHBlZCA9IHt9O1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZVJlZHVjZXJzLnJlZHVjZXJzKSB7XG4gICAgICAgIGNvbnN0IGtsYXNzID0gZmVhdHVyZVJlZHVjZXJzLnJlZHVjZXJzW2tleV07XG4gICAgICAgIGNvbnN0IGluc3QgPSBwYXJlbnRJbmplY3Rvci5nZXQoa2xhc3MsIG5ldyBrbGFzcygpKTtcbiAgICAgICAgbWFwcGVkW2tleV0gPSBjcmVhdGVSZWR1Y2VyKGluc3QpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmVhdHVyZVJlZHVjZXJzLmtleSkge1xuICAgICAgICByZWR1Y2VyRmFjdG9yeS5hZGRGZWF0dXJlKHtcbiAgICAgICAgICByZWR1Y2VyczogbWFwcGVkLFxuICAgICAgICAgIHJlZHVjZXJGYWN0b3J5OiA8YW55PmNvbWJpbmVSZWR1Y2VycyxcbiAgICAgICAgICBrZXk6IGZlYXR1cmVSZWR1Y2Vycy5rZXlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=