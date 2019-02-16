/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var NGRX_ACTIONS_META = '__ngrx__actions__';
/**
 * @record
 */
export function StoreMetadata() { }
if (false) {
    /** @type {?|undefined} */
    StoreMetadata.prototype.initialState;
    /** @type {?} */
    StoreMetadata.prototype.actions;
    /** @type {?} */
    StoreMetadata.prototype.effects;
}
/**
 * @record
 */
export function ActionMeta() { }
if (false) {
    /** @type {?} */
    ActionMeta.prototype.action;
    /** @type {?} */
    ActionMeta.prototype.fn;
    /** @type {?} */
    ActionMeta.prototype.type;
}
/**
 * @param {?} target
 * @return {?}
 */
export function ensureStoreMetadata(target) {
    // see https://github.com/angular/angular/blob/master/packages/core/src/util/decorators.ts#L60
    if (!target.hasOwnProperty(NGRX_ACTIONS_META)) {
        /** @type {?} */
        var defaultMetadata = { actions: {}, effects: {} };
        Object.defineProperty(target, NGRX_ACTIONS_META, { value: defaultMetadata });
    }
    return target[NGRX_ACTIONS_META];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1hY3Rpb25zLyIsInNvdXJjZXMiOlsiaW50ZXJuYWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLGlCQUFpQixHQUFHLG1CQUFtQjs7OztBQUVwRCxtQ0FJQzs7O0lBSEMscUNBQW1COztJQUNuQixnQ0FBcUI7O0lBQ3JCLGdDQUFxQjs7Ozs7QUFHdkIsZ0NBSUM7OztJQUhDLDRCQUFtQjs7SUFDbkIsd0JBQVc7O0lBQ1gsMEJBQWE7Ozs7OztBQU9mLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxNQUFXO0lBQzdDLDhGQUE4RjtJQUM5RixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFOztZQUN2QyxlQUFlLEdBQWtCLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1FBQ25FLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7S0FDOUU7SUFDRCxPQUFPLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ25DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnLi9zeW1ib2xzJztcblxuZXhwb3J0IGNvbnN0IE5HUlhfQUNUSU9OU19NRVRBID0gJ19fbmdyeF9fYWN0aW9uc19fJztcblxuZXhwb3J0IGludGVyZmFjZSBTdG9yZU1ldGFkYXRhIHtcbiAgaW5pdGlhbFN0YXRlPzogYW55O1xuICBhY3Rpb25zOiBBY3Rpb25zTWV0YTtcbiAgZWZmZWN0czogQWN0aW9uc01ldGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uTWV0YSB7XG4gIGFjdGlvbjogQWN0aW9uVHlwZTtcbiAgZm46IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25zTWV0YSA9IHtcbiAgW3R5cGU6IHN0cmluZ106IEFjdGlvbk1ldGE7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlU3RvcmVNZXRhZGF0YSh0YXJnZXQ6IGFueSk6IFN0b3JlTWV0YWRhdGEge1xuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iL21hc3Rlci9wYWNrYWdlcy9jb3JlL3NyYy91dGlsL2RlY29yYXRvcnMudHMjTDYwXG4gIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KE5HUlhfQUNUSU9OU19NRVRBKSkge1xuICAgIGNvbnN0IGRlZmF1bHRNZXRhZGF0YTogU3RvcmVNZXRhZGF0YSA9IHsgYWN0aW9uczoge30sIGVmZmVjdHM6IHt9IH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgTkdSWF9BQ1RJT05TX01FVEEsIHsgdmFsdWU6IGRlZmF1bHRNZXRhZGF0YSB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0W05HUlhfQUNUSU9OU19NRVRBXTtcbn1cbiJdfQ==