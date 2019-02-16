/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ensureStoreMetadata } from './internals';
/**
 * @param {...?} effectKlasses
 * @return {?}
 */
export function Effect(...effectKlasses) {
    return function (target, name, descriptor) {
        /** @type {?} */
        const meta = ensureStoreMetadata(target.constructor);
        for (const klass of effectKlasses) {
            /** @type {?} */
            const inst = new klass();
            /** @type {?} */
            const type = inst.type;
            if (meta.effects[type]) {
                throw new Error(`@Effect for '${type}' is defined multiple times in functions '${meta.effects[type].fn}' and '${name}'`);
            }
            meta.effects[type] = {
                action: klass,
                fn: name,
                type
            };
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1hY3Rpb25zLyIsInNvdXJjZXMiOlsiZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBRWxELE1BQU0sVUFBVSxNQUFNLENBQUMsR0FBRyxhQUEyQjtJQUNuRCxPQUFPLFVBQVMsTUFBVyxFQUFFLElBQVksRUFBRSxVQUF3Qzs7Y0FDM0UsSUFBSSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFcEQsS0FBSyxNQUFNLEtBQUssSUFBSSxhQUFhLEVBQUU7O2tCQUMzQixJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7O2tCQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFFdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixNQUFNLElBQUksS0FBSyxDQUNiLGdCQUFnQixJQUFJLDZDQUE2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsVUFBVSxJQUFJLEdBQUcsQ0FDeEcsQ0FBQzthQUNIO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDbkIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsSUFBSTthQUNMLENBQUM7U0FDSDtJQUNILENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnLi9zeW1ib2xzJztcbmltcG9ydCB7IGVuc3VyZVN0b3JlTWV0YWRhdGEgfSBmcm9tICcuL2ludGVybmFscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBFZmZlY3QoLi4uZWZmZWN0S2xhc3NlczogQWN0aW9uVHlwZVtdKSB7XG4gIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+KSB7XG4gICAgY29uc3QgbWV0YSA9IGVuc3VyZVN0b3JlTWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yKTtcblxuICAgIGZvciAoY29uc3Qga2xhc3Mgb2YgZWZmZWN0S2xhc3Nlcykge1xuICAgICAgY29uc3QgaW5zdCA9IG5ldyBrbGFzcygpO1xuICAgICAgY29uc3QgdHlwZSA9IGluc3QudHlwZTtcblxuICAgICAgaWYgKG1ldGEuZWZmZWN0c1t0eXBlXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEBFZmZlY3QgZm9yICcke3R5cGV9JyBpcyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzIGluIGZ1bmN0aW9ucyAnJHttZXRhLmVmZmVjdHNbdHlwZV0uZm59JyBhbmQgJyR7bmFtZX0nYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBtZXRhLmVmZmVjdHNbdHlwZV0gPSB7XG4gICAgICAgIGFjdGlvbjoga2xhc3MsXG4gICAgICAgIGZuOiBuYW1lLFxuICAgICAgICB0eXBlXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==