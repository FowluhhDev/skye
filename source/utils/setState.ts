import { Render, State } from "../types/render";

/**
 * Sets the state of a render
 * @param {any} render The target render
 * @param {any} state The state to set
 * @returns {any}
 * @since v0.0.1
 */
function setState(render: Render | undefined, state: State) {
    if (render) render.state = state;
}

export {
    setState,
}