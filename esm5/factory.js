/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
                    return tslib_1.__spread(state);
                }
                else {
                    return tslib_1.__assign({}, state);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtYWN0aW9ucy8iLCJzb3VyY2VzIjpbImZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFpQixNQUFNLGFBQWEsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7QUFFdEMsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsS0FJTzs7UUFFRCxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUzs7UUFDN0IsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSztJQUVwRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1FBQzVDLE1BQU0sSUFBSSxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQztLQUNqRjs7UUFFSyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFO0lBQzNDLElBQUEsa0RBQThFLEVBQTVFLDhCQUFZLEVBQUUsb0JBQU8sRUFBRSxvQkFBcUQ7SUFFcEYsT0FBTyxVQUFTLEtBQXlCLEVBQUUsTUFBYztRQUF6QyxzQkFBQSxFQUFBLG9CQUF5Qjs7WUFDakMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLElBQUksVUFBVSxFQUFFOztnQkFDUixNQUFNLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQ3JELElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtnQkFDeEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4Qix3QkFBVyxLQUFLLEVBQUU7aUJBQ25CO3FCQUFNO29CQUNMLDRCQUFZLEtBQUssRUFBRztpQkFDckI7YUFDRjtZQUNELEtBQUssR0FBRyxNQUFNLENBQUM7U0FDaEI7O1lBRUssVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLElBQUksVUFBVSxFQUFFOztnQkFDUixNQUFNLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQ3JELElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtvQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7d0JBQ3RDLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFOzRCQUNqQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ3RDO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRTtvQkFDM0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsVUFBVSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO3FCQUN2RTt5QkFBTTt3QkFDTCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDbkM7aUJBQ0Y7YUFDRjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgbWF0ZXJpYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5HUlhfQUNUSU9OU19NRVRBLCBTdG9yZU1ldGFkYXRhIH0gZnJvbSAnLi9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgTmdyeFNlbGVjdCB9IGZyb20gJy4vc2VsZWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXI8VFN0YXRlID0gYW55PihcbiAgc3RvcmU6XG4gICAgfCB7XG4gICAgICAgIG5ldyAoLi4uYXJnczogYW55W10pOiBhbnk7XG4gICAgICB9XG4gICAgfCBhbnlcbik6IChzdGF0ZTogVFN0YXRlLCBhY3Rpb246IEFjdGlvbiB8IGFueSkgPT4gVFN0YXRlIHtcbiAgY29uc3QgaXNJbnN0YW5jZSA9ICFzdG9yZS5wcm90b3R5cGU7XG4gIGNvbnN0IGtsYXNzID0gaXNJbnN0YW5jZSA/IHN0b3JlLmNvbnN0cnVjdG9yIDogc3RvcmU7XG5cbiAgaWYgKCFrbGFzcy5oYXNPd25Qcm9wZXJ0eShOR1JYX0FDVElPTlNfTUVUQSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcmVkdWNlciBjYW4gYmUgY3JlYXRlZCBmcm9tIGEgQFN0b3JlIGRlY29yYXRlZCBjbGFzcyBvbmx5LicpO1xuICB9XG5cbiAgY29uc3QgaW5zdGFuY2UgPSBpc0luc3RhbmNlID8gc3RvcmUgOiBuZXcgc3RvcmUoKTtcbiAgY29uc3QgeyBpbml0aWFsU3RhdGUsIGFjdGlvbnMsIGVmZmVjdHMgfSA9IGtsYXNzW05HUlhfQUNUSU9OU19NRVRBXSBhcyBTdG9yZU1ldGFkYXRhO1xuXG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZTogYW55ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbikge1xuICAgIGNvbnN0IGFjdGlvbk1ldGEgPSBhY3Rpb25zW2FjdGlvbi50eXBlXTtcbiAgICBpZiAoYWN0aW9uTWV0YSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gaW5zdGFuY2VbYWN0aW9uTWV0YS5mbl0oc3RhdGUsIGFjdGlvbik7XG4gICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3RhdGUgPSByZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgZWZmZWN0TWV0YSA9IGVmZmVjdHNbYWN0aW9uLnR5cGVdO1xuICAgIGlmIChlZmZlY3RNZXRhKSB7XG4gICAgICBjb25zdCByZXRWYWwgPSBpbnN0YW5jZVtlZmZlY3RNZXRhLmZuXShzdGF0ZSwgYWN0aW9uKTtcbiAgICAgIGlmIChyZXRWYWwpIHtcbiAgICAgICAgaWYgKHJldFZhbC5zdWJzY3JpYmUpIHtcbiAgICAgICAgICByZXRWYWwucGlwZShtYXRlcmlhbGl6ZSgpKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMudmFsdWUgJiYgTmdyeFNlbGVjdC5zdG9yZSkge1xuICAgICAgICAgICAgICBOZ3J4U2VsZWN0LnN0b3JlLmRpc3BhdGNoKHJlcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoTmdyeFNlbGVjdC5zdG9yZSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJldFZhbCkpIHtcbiAgICAgICAgICAgIHJldFZhbC5mb3JFYWNoKHIgPT4gTmdyeFNlbGVjdC5zdG9yZSAmJiBOZ3J4U2VsZWN0LnN0b3JlLmRpc3BhdGNoKHIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmdyeFNlbGVjdC5zdG9yZS5kaXNwYXRjaChyZXRWYWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn1cbiJdfQ==