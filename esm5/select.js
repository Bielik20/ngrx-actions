/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
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
export { NgrxSelect };
if (false) {
    /** @type {?} */
    NgrxSelect.store;
}
/**
 * Slice state from the store.
 * @template TState, TValue
 * @param {?=} selectorOrFeature
 * @param {...?} paths
 * @return {?}
 */
export function Select(selectorOrFeature) {
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
            var propsArray = paths.length ? tslib_1.__spread([selectorOrFeature], paths) : selectorOrFeature.split('.');
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
export function fastPropGetter(paths) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1hY3Rpb25zLyIsInNvdXJjZXMiOlsic2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQUFBO0lBTUEsQ0FBQzs7Ozs7SUFIQyw0QkFBTzs7OztJQUFQLFVBQVEsS0FBaUI7UUFDdkIsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUhNLGdCQUFLLEdBQTJCLFNBQVMsQ0FBQzs7Z0JBRmxELFVBQVU7O0lBTVgsaUJBQUM7Q0FBQSxBQU5ELElBTUM7U0FMWSxVQUFVOzs7SUFDckIsaUJBQWlEOzs7Ozs7Ozs7QUFrQm5ELE1BQU0sVUFBVSxNQUFNLENBQ3BCLGlCQUFxRDtJQUNyRCxlQUFrQjtTQUFsQixVQUFrQixFQUFsQixxQkFBa0IsRUFBbEIsSUFBa0I7UUFBbEIsOEJBQWtCOztJQUVsQixPQUFPLFVBQVMsTUFBVyxFQUFFLElBQVk7O1lBQ2pDLGNBQWMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLFlBQVk7O1lBQzdDLEVBQTRCO1FBQ2hDLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBQ0QsNENBQTRDO1FBQzVDLElBQUksT0FBTyxpQkFBaUIsS0FBSyxRQUFRLEVBQUU7O2dCQUNuQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG1CQUFFLGlCQUFpQixHQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM5RixFQUFFLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxFQUFFLEdBQUcsaUJBQWlCLENBQUM7U0FDeEI7O1lBRUssWUFBWSxHQUFHOztnQkFDYixLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUs7WUFDOUIsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDdkQ7WUFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUVELElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLEdBQUcsY0FBYyxHQUFHLFlBQVksQ0FBQyxDQUFDO1NBQzVGO1FBRUQsb0JBQW9CO1FBQ3BCLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFO2dCQUM1QyxRQUFRLEVBQUUsSUFBSTtnQkFDZCxVQUFVLEVBQUUsS0FBSztnQkFDakIsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUNsQyxHQUFHLEVBQUU7b0JBQ0gsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixDQUFDO2dCQUNELFVBQVUsRUFBRSxJQUFJO2dCQUNoQixZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7OztBQVFELE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBZTs7UUFDdEMsUUFBUSxHQUFHLEtBQUs7O1FBQ2xCLEdBQUcsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQzs7UUFDOUIsQ0FBQyxHQUFHLENBQUM7O1FBQ0QsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNOztRQUNyQixJQUFJLEdBQUcsR0FBRztJQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2QsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN4RDs7UUFDSyxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3hELE9BQU8sbUJBQWlCLEVBQUUsRUFBQSxDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3J4U2VsZWN0IHtcbiAgc3RhdGljIHN0b3JlOiBTdG9yZTxhbnk+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBjb25uZWN0KHN0b3JlOiBTdG9yZTxhbnk+KSB7XG4gICAgTmdyeFNlbGVjdC5zdG9yZSA9IHN0b3JlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Q8VFN0YXRlID0gYW55LCBUVmFsdWUgPSBhbnk+KFxuICBzZWxlY3RvcjogU2VsZWN0b3I8VFN0YXRlLCBUVmFsdWU+XG4pOiAodGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZykgPT4gdm9pZDtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdDxUU3RhdGUgPSBhbnksIFRWYWx1ZSA9IGFueT4oXG4gIHNlbGVjdG9yT3JGZWF0dXJlPzogc3RyaW5nLFxuICAuLi5wYXRoczogc3RyaW5nW11cbik6ICh0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4vKipcbiAqIFNsaWNlIHN0YXRlIGZyb20gdGhlIHN0b3JlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0PFRTdGF0ZSA9IGFueSwgVFZhbHVlID0gYW55PihcbiAgc2VsZWN0b3JPckZlYXR1cmU/OiBzdHJpbmcgfCBTZWxlY3RvcjxUU3RhdGUsIFRWYWx1ZT4sXG4gIC4uLnBhdGhzOiBzdHJpbmdbXVxuKSB7XG4gIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0b3JGbk5hbWUgPSAnX18nICsgbmFtZSArICdfX3NlbGVjdG9yJztcbiAgICBsZXQgZm46IFNlbGVjdG9yPFRTdGF0ZSwgVFZhbHVlPjtcbiAgICAvLyBOb3RoaW5nIGhlcmU/IFVzZSBwcm9wZXJ5IG5hbWUgYXMgc2VsZWN0b3JcbiAgICBpZiAoIXNlbGVjdG9yT3JGZWF0dXJlKSB7XG4gICAgICBzZWxlY3Rvck9yRmVhdHVyZSA9IG5hbWU7XG4gICAgfVxuICAgIC8vIEhhbmRsZSBzdHJpbmcgdnMgU2VsZWN0b3I8VFN0YXRlLCBUVmFsdWU+XG4gICAgaWYgKHR5cGVvZiBzZWxlY3Rvck9yRmVhdHVyZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHByb3BzQXJyYXkgPSBwYXRocy5sZW5ndGggPyBbc2VsZWN0b3JPckZlYXR1cmUsIC4uLnBhdGhzXSA6IHNlbGVjdG9yT3JGZWF0dXJlLnNwbGl0KCcuJyk7XG4gICAgICBmbiA9IGZhc3RQcm9wR2V0dGVyKHByb3BzQXJyYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbiA9IHNlbGVjdG9yT3JGZWF0dXJlO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVNlbGVjdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHN0b3JlID0gTmdyeFNlbGVjdC5zdG9yZTtcbiAgICAgIGlmICghc3RvcmUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZ3J4U2VsZWN0IG5vdCBjb25uZWN0ZWQgdG8gc3RvcmUhJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RvcmUuc2VsZWN0KGZuKTtcbiAgICB9O1xuXG4gICAgaWYgKHRhcmdldFtzZWxlY3RvckZuTmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCB1c2UgQFNlbGVjdCBkZWNvcmF0b3IgYW5kIGEgJyArIHNlbGVjdG9yRm5OYW1lICsgJyBwcm9wZXJ0eS4nKTtcbiAgICB9XG5cbiAgICAvLyBSZWRlZmluZSBwcm9wZXJ0eVxuICAgIGlmIChkZWxldGUgdGFyZ2V0W25hbWVdKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBzZWxlY3RvckZuTmFtZSwge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tzZWxlY3RvckZuTmFtZV0gfHwgKHRoaXNbc2VsZWN0b3JGbk5hbWVdID0gY3JlYXRlU2VsZWN0LmFwcGx5KHRoaXMpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVGhlIGdlbmVyYXRlZCBmdW5jdGlvbiBpcyBmYXN0ZXIgdGhhbjpcbiAqIC0gcGx1Y2sgKE9ic2VydmFibGUgb3BlcmF0b3IpXG4gKiAtIG1lbW9pemUgKG9sZCBuZ3J4LWFjdGlvbnMgaW1wbGVtZW50YXRpb24pXG4gKiAtIE1lbW9pemVkU2VsZWN0b3IgKG5ncngpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYXN0UHJvcEdldHRlcihwYXRoczogc3RyaW5nW10pOiAoeDogYW55KSA9PiBhbnkge1xuICBjb25zdCBzZWdtZW50cyA9IHBhdGhzO1xuICBsZXQgc2VnID0gJ3N0b3JlLicgKyBzZWdtZW50c1swXSxcbiAgICBpID0gMDtcbiAgY29uc3QgbCA9IHNlZ21lbnRzLmxlbmd0aDtcbiAgbGV0IGV4cHIgPSBzZWc7XG4gIHdoaWxlICgrK2kgPCBsKSB7XG4gICAgZXhwciA9IGV4cHIgKyAnICYmICcgKyAoc2VnID0gc2VnICsgJy4nICsgc2VnbWVudHNbaV0pO1xuICB9XG4gIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKCdzdG9yZScsICdyZXR1cm4gJyArIGV4cHIgKyAnOycpO1xuICByZXR1cm4gPCh4OiBhbnkpID0+IGFueT5mbjtcbn1cbiJdfQ==