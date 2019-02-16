/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ensureStoreMetadata } from './internals';
/**
 * @param {?=} initialState
 * @return {?}
 */
export function Store(initialState) {
    if (initialState === void 0) { initialState = {}; }
    return function (target) {
        /** @type {?} */
        var meta = ensureStoreMetadata(target);
        meta.initialState = initialState;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWFjdGlvbnMvIiwic291cmNlcyI6WyJzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUlsRCxNQUFNLFVBQVUsS0FBSyxDQUFDLFlBQXNCO0lBQXRCLDZCQUFBLEVBQUEsaUJBQXNCO0lBQzFDLE9BQU8sVUFBUyxNQUFnQjs7WUFDeEIsSUFBSSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNuQyxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5zdXJlU3RvcmVNZXRhZGF0YSB9IGZyb20gJy4vaW50ZXJuYWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlPFRTdGF0ZT4oaW5pdGlhbFN0YXRlPzogVFN0YXRlKTogKHRhcmdldDogRnVuY3Rpb24pID0+IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gU3RvcmUoaW5pdGlhbFN0YXRlPzogYW55KTogKHRhcmdldDogRnVuY3Rpb24pID0+IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gU3RvcmUoaW5pdGlhbFN0YXRlOiBhbnkgPSB7fSkge1xuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBGdW5jdGlvbikge1xuICAgIGNvbnN0IG1ldGEgPSBlbnN1cmVTdG9yZU1ldGFkYXRhKHRhcmdldCk7XG4gICAgbWV0YS5pbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gIH07XG59XG4iXX0=