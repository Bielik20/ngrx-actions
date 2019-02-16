/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ensureStoreMetadata } from './internals';
/**
 * @param {?=} initialState
 * @return {?}
 */
export function Store(initialState = {}) {
    return function (target) {
        /** @type {?} */
        const meta = ensureStoreMetadata(target);
        meta.initialState = initialState;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWFjdGlvbnMvIiwic291cmNlcyI6WyJzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUlsRCxNQUFNLFVBQVUsS0FBSyxDQUFDLGVBQW9CLEVBQUU7SUFDMUMsT0FBTyxVQUFTLE1BQWdCOztjQUN4QixJQUFJLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ25DLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbnN1cmVTdG9yZU1ldGFkYXRhIH0gZnJvbSAnLi9pbnRlcm5hbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gU3RvcmU8VFN0YXRlPihpbml0aWFsU3RhdGU/OiBUU3RhdGUpOiAodGFyZ2V0OiBGdW5jdGlvbikgPT4gdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiBTdG9yZShpbml0aWFsU3RhdGU/OiBhbnkpOiAodGFyZ2V0OiBGdW5jdGlvbikgPT4gdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiBTdG9yZShpbml0aWFsU3RhdGU6IGFueSA9IHt9KSB7XG4gIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6IEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgbWV0YSA9IGVuc3VyZVN0b3JlTWV0YWRhdGEodGFyZ2V0KTtcbiAgICBtZXRhLmluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgfTtcbn1cbiJdfQ==