/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ensureStoreMetadata } from './internals';
/**
 * @param {...?} actionsKlasses
 * @return {?}
 */
export function Action(...actionsKlasses) {
    return function (target, name, descriptor) {
        /** @type {?} */
        const meta = ensureStoreMetadata(target.constructor);
        for (const klass of actionsKlasses) {
            /** @type {?} */
            const inst = new klass();
            /** @type {?} */
            const type = inst.type;
            if (meta.actions[type]) {
                throw new Error(`@Action for '${type}' is defined multiple times in functions '${meta.actions[type].fn}' and '${name}'`);
            }
            meta.actions[type] = {
                action: klass,
                fn: name,
                type
            };
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1hY3Rpb25zLyIsInNvdXJjZXMiOlsiYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBR2xELE1BQU0sVUFBVSxNQUFNLENBQUMsR0FBRyxjQUE0QjtJQUNwRCxPQUFPLFVBQVMsTUFBVyxFQUFFLElBQVksRUFBRSxVQUF3Qzs7Y0FDM0UsSUFBSSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFcEQsS0FBSyxNQUFNLEtBQUssSUFBSSxjQUFjLEVBQUU7O2tCQUM1QixJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7O2tCQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFFdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixNQUFNLElBQUksS0FBSyxDQUNiLGdCQUFnQixJQUFJLDZDQUE2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsVUFBVSxJQUFJLEdBQUcsQ0FDeEcsQ0FBQzthQUNIO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDbkIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsSUFBSTthQUNMLENBQUM7U0FDSDtJQUNILENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbnN1cmVTdG9yZU1ldGFkYXRhIH0gZnJvbSAnLi9pbnRlcm5hbHMnO1xuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJy4vc3ltYm9scyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBBY3Rpb24oLi4uYWN0aW9uc0tsYXNzZXM6IEFjdGlvblR5cGVbXSkge1xuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55Pikge1xuICAgIGNvbnN0IG1ldGEgPSBlbnN1cmVTdG9yZU1ldGFkYXRhKHRhcmdldC5jb25zdHJ1Y3Rvcik7XG5cbiAgICBmb3IgKGNvbnN0IGtsYXNzIG9mIGFjdGlvbnNLbGFzc2VzKSB7XG4gICAgICBjb25zdCBpbnN0ID0gbmV3IGtsYXNzKCk7XG4gICAgICBjb25zdCB0eXBlID0gaW5zdC50eXBlO1xuXG4gICAgICBpZiAobWV0YS5hY3Rpb25zW3R5cGVdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQEFjdGlvbiBmb3IgJyR7dHlwZX0nIGlzIGRlZmluZWQgbXVsdGlwbGUgdGltZXMgaW4gZnVuY3Rpb25zICcke21ldGEuYWN0aW9uc1t0eXBlXS5mbn0nIGFuZCAnJHtuYW1lfSdgXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG1ldGEuYWN0aW9uc1t0eXBlXSA9IHtcbiAgICAgICAgYWN0aW9uOiBrbGFzcyxcbiAgICAgICAgZm46IG5hbWUsXG4gICAgICAgIHR5cGVcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuIl19