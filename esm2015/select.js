/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class NgrxSelect {
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
export function Select(selectorOrFeature, ...paths) {
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
export function fastPropGetter(paths) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1hY3Rpb25zLyIsInNvdXJjZXMiOlsic2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE1BQU0sT0FBTyxVQUFVOzs7OztJQUVyQixPQUFPLENBQUMsS0FBaUI7UUFDdkIsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7QUFITSxnQkFBSyxHQUEyQixTQUFTLENBQUM7O1lBRmxELFVBQVU7Ozs7SUFFVCxpQkFBaUQ7Ozs7Ozs7OztBQWtCbkQsTUFBTSxVQUFVLE1BQU0sQ0FDcEIsaUJBQXFELEVBQ3JELEdBQUcsS0FBZTtJQUVsQixPQUFPLFVBQVMsTUFBVyxFQUFFLElBQVk7O2NBQ2pDLGNBQWMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLFlBQVk7O1lBQzdDLEVBQTRCO1FBQ2hDLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBQ0QsNENBQTRDO1FBQzVDLElBQUksT0FBTyxpQkFBaUIsS0FBSyxRQUFRLEVBQUU7O2tCQUNuQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQzlGLEVBQUUsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQztTQUN4Qjs7Y0FFSyxZQUFZLEdBQUcsR0FBRyxFQUFFOztrQkFDbEIsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLO1lBQzlCLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQ3ZEO1lBQ0QsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxHQUFHLGNBQWMsR0FBRyxZQUFZLENBQUMsQ0FBQztTQUM1RjtRQUVELG9CQUFvQjtRQUNwQixJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRTtnQkFDNUMsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDbEMsR0FBRyxFQUFFO29CQUNILE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFDRCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7QUFRRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQWU7O1VBQ3RDLFFBQVEsR0FBRyxLQUFLOztRQUNsQixHQUFHLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7O1FBQzlCLENBQUMsR0FBRyxDQUFDOztVQUNELENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTTs7UUFDckIsSUFBSSxHQUFHLEdBQUc7SUFDZCxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNkLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7O1VBQ0ssRUFBRSxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUN4RCxPQUFPLG1CQUFpQixFQUFFLEVBQUEsQ0FBQztBQUM3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmdyeFNlbGVjdCB7XG4gIHN0YXRpYyBzdG9yZTogU3RvcmU8YW55PiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgY29ubmVjdChzdG9yZTogU3RvcmU8YW55Pikge1xuICAgIE5ncnhTZWxlY3Quc3RvcmUgPSBzdG9yZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0PFRTdGF0ZSA9IGFueSwgVFZhbHVlID0gYW55PihcbiAgc2VsZWN0b3I6IFNlbGVjdG9yPFRTdGF0ZSwgVFZhbHVlPlxuKTogKHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Q8VFN0YXRlID0gYW55LCBUVmFsdWUgPSBhbnk+KFxuICBzZWxlY3Rvck9yRmVhdHVyZT86IHN0cmluZyxcbiAgLi4ucGF0aHM6IHN0cmluZ1tdXG4pOiAodGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZykgPT4gdm9pZDtcblxuLyoqXG4gKiBTbGljZSBzdGF0ZSBmcm9tIHRoZSBzdG9yZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdDxUU3RhdGUgPSBhbnksIFRWYWx1ZSA9IGFueT4oXG4gIHNlbGVjdG9yT3JGZWF0dXJlPzogc3RyaW5nIHwgU2VsZWN0b3I8VFN0YXRlLCBUVmFsdWU+LFxuICAuLi5wYXRoczogc3RyaW5nW11cbikge1xuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdG9yRm5OYW1lID0gJ19fJyArIG5hbWUgKyAnX19zZWxlY3Rvcic7XG4gICAgbGV0IGZuOiBTZWxlY3RvcjxUU3RhdGUsIFRWYWx1ZT47XG4gICAgLy8gTm90aGluZyBoZXJlPyBVc2UgcHJvcGVyeSBuYW1lIGFzIHNlbGVjdG9yXG4gICAgaWYgKCFzZWxlY3Rvck9yRmVhdHVyZSkge1xuICAgICAgc2VsZWN0b3JPckZlYXR1cmUgPSBuYW1lO1xuICAgIH1cbiAgICAvLyBIYW5kbGUgc3RyaW5nIHZzIFNlbGVjdG9yPFRTdGF0ZSwgVFZhbHVlPlxuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3JPckZlYXR1cmUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBwcm9wc0FycmF5ID0gcGF0aHMubGVuZ3RoID8gW3NlbGVjdG9yT3JGZWF0dXJlLCAuLi5wYXRoc10gOiBzZWxlY3Rvck9yRmVhdHVyZS5zcGxpdCgnLicpO1xuICAgICAgZm4gPSBmYXN0UHJvcEdldHRlcihwcm9wc0FycmF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4gPSBzZWxlY3Rvck9yRmVhdHVyZTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTZWxlY3QgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzdG9yZSA9IE5ncnhTZWxlY3Quc3RvcmU7XG4gICAgICBpZiAoIXN0b3JlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmdyeFNlbGVjdCBub3QgY29ubmVjdGVkIHRvIHN0b3JlIScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0b3JlLnNlbGVjdChmbik7XG4gICAgfTtcblxuICAgIGlmICh0YXJnZXRbc2VsZWN0b3JGbk5hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgdXNlIEBTZWxlY3QgZGVjb3JhdG9yIGFuZCBhICcgKyBzZWxlY3RvckZuTmFtZSArICcgcHJvcGVydHkuJyk7XG4gICAgfVxuXG4gICAgLy8gUmVkZWZpbmUgcHJvcGVydHlcbiAgICBpZiAoZGVsZXRlIHRhcmdldFtuYW1lXSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgc2VsZWN0b3JGbk5hbWUsIHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbc2VsZWN0b3JGbk5hbWVdIHx8ICh0aGlzW3NlbGVjdG9yRm5OYW1lXSA9IGNyZWF0ZVNlbGVjdC5hcHBseSh0aGlzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFRoZSBnZW5lcmF0ZWQgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW46XG4gKiAtIHBsdWNrIChPYnNlcnZhYmxlIG9wZXJhdG9yKVxuICogLSBtZW1vaXplIChvbGQgbmdyeC1hY3Rpb25zIGltcGxlbWVudGF0aW9uKVxuICogLSBNZW1vaXplZFNlbGVjdG9yIChuZ3J4KVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFzdFByb3BHZXR0ZXIocGF0aHM6IHN0cmluZ1tdKTogKHg6IGFueSkgPT4gYW55IHtcbiAgY29uc3Qgc2VnbWVudHMgPSBwYXRocztcbiAgbGV0IHNlZyA9ICdzdG9yZS4nICsgc2VnbWVudHNbMF0sXG4gICAgaSA9IDA7XG4gIGNvbnN0IGwgPSBzZWdtZW50cy5sZW5ndGg7XG4gIGxldCBleHByID0gc2VnO1xuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIGV4cHIgPSBleHByICsgJyAmJiAnICsgKHNlZyA9IHNlZyArICcuJyArIHNlZ21lbnRzW2ldKTtcbiAgfVxuICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbignc3RvcmUnLCAncmV0dXJuICcgKyBleHByICsgJzsnKTtcbiAgcmV0dXJuIDwoeDogYW55KSA9PiBhbnk+Zm47XG59XG4iXX0=