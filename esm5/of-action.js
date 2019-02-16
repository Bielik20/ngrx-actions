/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { filter } from 'rxjs/operators';
/**
 * @param {...?} allowedTypes
 * @return {?}
 */
export function ofAction() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1hY3Rpb25zLyIsInNvdXJjZXMiOlsib2YtYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBT3hDLE1BQU0sVUFBVSxRQUFRO0lBQUMsc0JBQTZCO1NBQTdCLFVBQTZCLEVBQTdCLHFCQUE2QixFQUE3QixJQUE2QjtRQUE3QixpQ0FBNkI7OztRQUM5QyxVQUFVLEdBQUcsRUFBRTtJQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO0lBQ3JFLE9BQU8sTUFBTSxDQUFDLFVBQUMsTUFBYztRQUMzQixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnLi9zeW1ib2xzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9mQWN0aW9uPFQgZXh0ZW5kcyBBY3Rpb24+KGFsbG93ZWRUeXBlOiBBY3Rpb25UeXBlPFQ+KTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb24sIFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIG9mQWN0aW9uPFQgZXh0ZW5kcyBBY3Rpb24+KC4uLmFsbG93ZWRUeXBlczogQWN0aW9uVHlwZVtdKTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb24sIFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIG9mQWN0aW9uKC4uLmFsbG93ZWRUeXBlczogQWN0aW9uVHlwZVtdKTogT3BlcmF0b3JGdW5jdGlvbjxBY3Rpb24sIEFjdGlvbj4ge1xuICBjb25zdCBhbGxvd2VkTWFwID0ge307XG4gIGFsbG93ZWRUeXBlcy5mb3JFYWNoKGtsYXNzID0+IChhbGxvd2VkTWFwW25ldyBrbGFzcygpLnR5cGVdID0gdHJ1ZSkpO1xuICByZXR1cm4gZmlsdGVyKChhY3Rpb246IEFjdGlvbikgPT4ge1xuICAgIHJldHVybiBhbGxvd2VkTWFwW2FjdGlvbi50eXBlXTtcbiAgfSk7XG59XG4iXX0=