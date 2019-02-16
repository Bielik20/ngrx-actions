/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ensureStoreMetadata } from './internals';
/**
 * @param {...?} effectKlasses
 * @return {?}
 */
export function Effect() {
    var effectKlasses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        effectKlasses[_i] = arguments[_i];
    }
    return function (target, name, descriptor) {
        var e_1, _a;
        /** @type {?} */
        var meta = ensureStoreMetadata(target.constructor);
        try {
            for (var effectKlasses_1 = tslib_1.__values(effectKlasses), effectKlasses_1_1 = effectKlasses_1.next(); !effectKlasses_1_1.done; effectKlasses_1_1 = effectKlasses_1.next()) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1hY3Rpb25zLyIsInNvdXJjZXMiOlsiZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUVsRCxNQUFNLFVBQVUsTUFBTTtJQUFDLHVCQUE4QjtTQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7UUFBOUIsa0NBQThCOztJQUNuRCxPQUFPLFVBQVMsTUFBVyxFQUFFLElBQVksRUFBRSxVQUF3Qzs7O1lBQzNFLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOztZQUVwRCxLQUFvQixJQUFBLGtCQUFBLGlCQUFBLGFBQWEsQ0FBQSw0Q0FBQSx1RUFBRTtnQkFBOUIsSUFBTSxLQUFLLDBCQUFBOztvQkFDUixJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7O29CQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7Z0JBRXRCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FDYixrQkFBZ0IsSUFBSSxrREFBNkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLGVBQVUsSUFBSSxNQUFHLENBQ3hHLENBQUM7aUJBQ0g7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRztvQkFDbkIsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsRUFBRSxFQUFFLElBQUk7b0JBQ1IsSUFBSSxNQUFBO2lCQUNMLENBQUM7YUFDSDs7Ozs7Ozs7O0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblR5cGUgfSBmcm9tICcuL3N5bWJvbHMnO1xuaW1wb3J0IHsgZW5zdXJlU3RvcmVNZXRhZGF0YSB9IGZyb20gJy4vaW50ZXJuYWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIEVmZmVjdCguLi5lZmZlY3RLbGFzc2VzOiBBY3Rpb25UeXBlW10pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPGFueT4pIHtcbiAgICBjb25zdCBtZXRhID0gZW5zdXJlU3RvcmVNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IpO1xuXG4gICAgZm9yIChjb25zdCBrbGFzcyBvZiBlZmZlY3RLbGFzc2VzKSB7XG4gICAgICBjb25zdCBpbnN0ID0gbmV3IGtsYXNzKCk7XG4gICAgICBjb25zdCB0eXBlID0gaW5zdC50eXBlO1xuXG4gICAgICBpZiAobWV0YS5lZmZlY3RzW3R5cGVdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQEVmZmVjdCBmb3IgJyR7dHlwZX0nIGlzIGRlZmluZWQgbXVsdGlwbGUgdGltZXMgaW4gZnVuY3Rpb25zICcke21ldGEuZWZmZWN0c1t0eXBlXS5mbn0nIGFuZCAnJHtuYW1lfSdgXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG1ldGEuZWZmZWN0c1t0eXBlXSA9IHtcbiAgICAgICAgYWN0aW9uOiBrbGFzcyxcbiAgICAgICAgZm46IG5hbWUsXG4gICAgICAgIHR5cGVcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuIl19