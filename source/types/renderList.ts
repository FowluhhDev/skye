import { Render } from "./render"

/** The type for a render list.
 * @since v0.0.1
*/
type RenderListType = Render[]

/**
 * Attaches a render list to window
 * @param {RenderListType} list The list to attach
 * @since v0.0.1
 */
function attachRenderList(list: RenderListType) {
    window.renderList = list;
}

/**
 * Gets a render from an ID
 * @param {number} id The ID of the render
 * @returns {Render | undefined}
 * @since v0.0.1
 */
function getRenderFromID(id: number): Render | undefined {
    for (const render of window.renderList) {
        if (render.id == id) {
            return render;
        }
    }
}

export {
    RenderListType,

    attachRenderList,
    getRenderFromID,
}