/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ensureStoreMetadata } from './internals';
/**
 * @param {...?} actionsKlasses
 * @return {?}
 */
export function Action() {
    var actionsKlasses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actionsKlasses[_i] = arguments[_i];
    }
    return function (target, name, descriptor) {
        var e_1, _a;
        /** @type {?} */
        var meta = ensureStoreMetadata(target.constructor);
        try {
            for (var actionsKlasses_1 = tslib_1.__values(actionsKlasses), actionsKlasses_1_1 = actionsKlasses_1.next(); !actionsKlasses_1_1.done; actionsKlasses_1_1 = actionsKlasses_1.next()) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1hY3Rpb25zLyIsInNvdXJjZXMiOlsiYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUdsRCxNQUFNLFVBQVUsTUFBTTtJQUFDLHdCQUErQjtTQUEvQixVQUErQixFQUEvQixxQkFBK0IsRUFBL0IsSUFBK0I7UUFBL0IsbUNBQStCOztJQUNwRCxPQUFPLFVBQVMsTUFBVyxFQUFFLElBQVksRUFBRSxVQUF3Qzs7O1lBQzNFLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOztZQUVwRCxLQUFvQixJQUFBLG1CQUFBLGlCQUFBLGNBQWMsQ0FBQSw4Q0FBQSwwRUFBRTtnQkFBL0IsSUFBTSxLQUFLLDJCQUFBOztvQkFDUixJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7O29CQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7Z0JBRXRCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FDYixrQkFBZ0IsSUFBSSxrREFBNkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLGVBQVUsSUFBSSxNQUFHLENBQ3hHLENBQUM7aUJBQ0g7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRztvQkFDbkIsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsRUFBRSxFQUFFLElBQUk7b0JBQ1IsSUFBSSxNQUFBO2lCQUNMLENBQUM7YUFDSDs7Ozs7Ozs7O0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVuc3VyZVN0b3JlTWV0YWRhdGEgfSBmcm9tICcuL2ludGVybmFscyc7XG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnLi9zeW1ib2xzJztcblxuZXhwb3J0IGZ1bmN0aW9uIEFjdGlvbiguLi5hY3Rpb25zS2xhc3NlczogQWN0aW9uVHlwZVtdKSB7XG4gIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+KSB7XG4gICAgY29uc3QgbWV0YSA9IGVuc3VyZVN0b3JlTWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yKTtcblxuICAgIGZvciAoY29uc3Qga2xhc3Mgb2YgYWN0aW9uc0tsYXNzZXMpIHtcbiAgICAgIGNvbnN0IGluc3QgPSBuZXcga2xhc3MoKTtcbiAgICAgIGNvbnN0IHR5cGUgPSBpbnN0LnR5cGU7XG5cbiAgICAgIGlmIChtZXRhLmFjdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBAQWN0aW9uIGZvciAnJHt0eXBlfScgaXMgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyBpbiBmdW5jdGlvbnMgJyR7bWV0YS5hY3Rpb25zW3R5cGVdLmZufScgYW5kICcke25hbWV9J2BcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgbWV0YS5hY3Rpb25zW3R5cGVdID0ge1xuICAgICAgICBhY3Rpb246IGtsYXNzLFxuICAgICAgICBmbjogbmFtZSxcbiAgICAgICAgdHlwZVxuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG4iXX0=