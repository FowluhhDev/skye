import { RenderListType, attachRenderList } from "../types/renderList";

/**
 * Starts up the Skye core
 * @param {any} processList The process list defined
 * @returns {any}
 * @since v0.0.1
 */
function initSkye(processList: RenderListType) {
    attachRenderList(processList);
}

export {
    initSkye,
}