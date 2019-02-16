/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { materialize } from 'rxjs/operators';
import { NGRX_ACTIONS_META } from './internals';
import { NgrxSelect } from './select';
/**
 * @template TState
 * @param {?} store
 * @return {?}
 */
export function createReducer(store) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtYWN0aW9ucy8iLCJzb3VyY2VzIjpbImZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQWlCLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7OztBQUV0QyxNQUFNLFVBQVUsYUFBYSxDQUMzQixLQUlPOztVQUVELFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTOztVQUM3QixLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLO0lBRXBELElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7UUFDNUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO0tBQ2pGOztVQUVLLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUU7VUFDM0MsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLG1CQUFBLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFpQjtJQUVwRixPQUFPLFVBQVMsUUFBYSxZQUFZLEVBQUUsTUFBYzs7Y0FDakQsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLElBQUksVUFBVSxFQUFFOztrQkFDUixNQUFNLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQ3JELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDeEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4QixPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0wseUJBQVksS0FBSyxFQUFHO2lCQUNyQjthQUNGO1lBQ0QsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNoQjs7Y0FFSyxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxVQUFVLEVBQUU7O2tCQUNSLE1BQU0sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDckQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO29CQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUN6QyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRTs0QkFDakMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUN0QztvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDSjtxQkFBTSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUU7b0JBQzNCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdkU7eUJBQU07d0JBQ0wsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ25DO2lCQUNGO2FBQ0Y7U0FDRjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IG1hdGVyaWFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOR1JYX0FDVElPTlNfTUVUQSwgU3RvcmVNZXRhZGF0YSB9IGZyb20gJy4vaW50ZXJuYWxzJztcbmltcG9ydCB7IE5ncnhTZWxlY3QgfSBmcm9tICcuL3NlbGVjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VyPFRTdGF0ZSA9IGFueT4oXG4gIHN0b3JlOlxuICAgIHwge1xuICAgICAgICBuZXcgKC4uLmFyZ3M6IGFueVtdKTogYW55O1xuICAgICAgfVxuICAgIHwgYW55XG4pOiAoc3RhdGU6IFRTdGF0ZSwgYWN0aW9uOiBBY3Rpb24gfCBhbnkpID0+IFRTdGF0ZSB7XG4gIGNvbnN0IGlzSW5zdGFuY2UgPSAhc3RvcmUucHJvdG90eXBlO1xuICBjb25zdCBrbGFzcyA9IGlzSW5zdGFuY2UgPyBzdG9yZS5jb25zdHJ1Y3RvciA6IHN0b3JlO1xuXG4gIGlmICgha2xhc3MuaGFzT3duUHJvcGVydHkoTkdSWF9BQ1RJT05TX01FVEEpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIHJlZHVjZXIgY2FuIGJlIGNyZWF0ZWQgZnJvbSBhIEBTdG9yZSBkZWNvcmF0ZWQgY2xhc3Mgb25seS4nKTtcbiAgfVxuXG4gIGNvbnN0IGluc3RhbmNlID0gaXNJbnN0YW5jZSA/IHN0b3JlIDogbmV3IHN0b3JlKCk7XG4gIGNvbnN0IHsgaW5pdGlhbFN0YXRlLCBhY3Rpb25zLCBlZmZlY3RzIH0gPSBrbGFzc1tOR1JYX0FDVElPTlNfTUVUQV0gYXMgU3RvcmVNZXRhZGF0YTtcblxuICByZXR1cm4gZnVuY3Rpb24oc3RhdGU6IGFueSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pIHtcbiAgICBjb25zdCBhY3Rpb25NZXRhID0gYWN0aW9uc1thY3Rpb24udHlwZV07XG4gICAgaWYgKGFjdGlvbk1ldGEpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGluc3RhbmNlW2FjdGlvbk1ldGEuZm5dKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlKSkge1xuICAgICAgICAgIHJldHVybiBbLi4uc3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0YXRlID0gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IGVmZmVjdE1ldGEgPSBlZmZlY3RzW2FjdGlvbi50eXBlXTtcbiAgICBpZiAoZWZmZWN0TWV0YSkge1xuICAgICAgY29uc3QgcmV0VmFsID0gaW5zdGFuY2VbZWZmZWN0TWV0YS5mbl0oc3RhdGUsIGFjdGlvbik7XG4gICAgICBpZiAocmV0VmFsKSB7XG4gICAgICAgIGlmIChyZXRWYWwuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgcmV0VmFsLnBpcGUobWF0ZXJpYWxpemUoKSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLnZhbHVlICYmIE5ncnhTZWxlY3Quc3RvcmUpIHtcbiAgICAgICAgICAgICAgTmdyeFNlbGVjdC5zdG9yZS5kaXNwYXRjaChyZXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKE5ncnhTZWxlY3Quc3RvcmUpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXRWYWwpKSB7XG4gICAgICAgICAgICByZXRWYWwuZm9yRWFjaChyID0+IE5ncnhTZWxlY3Quc3RvcmUgJiYgTmdyeFNlbGVjdC5zdG9yZS5kaXNwYXRjaChyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5ncnhTZWxlY3Quc3RvcmUuZGlzcGF0Y2gocmV0VmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59XG4iXX0=