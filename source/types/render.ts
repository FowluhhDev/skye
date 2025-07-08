type State = "running" | "waiting" | "killed";

/**
 * The render type
 * @since v0.0.1
*/
type Render = {
    id: number;
    state: State;
    runningCode: () => {};
}

/**
 * The parameter type for making new render
 * @returns {any}
 * @since v0.0.1
 */
type NewRenderParams = {
    runningCode: () => {};
    id: number;
}

/**
 * Creates and starts a render
 * @param {any} params The parameters for the render
 * @returns {any}
 * @since v0.0.1
 */
function createRender(params: NewRenderParams) {
    const r: Render = {
        id: params.id,
        state: "running",
        runningCode: params.runningCode,
    }
    
    window.renderList.push(r);
}

/**
 * Makes and returns a render
 * @param {any} params The parameters for the render
 * @returns {any}
 * @since v0.0.1
*/
function makeRender(params: NewRenderParams): Render {
    const r: Render = {
        id: params.id,
        state: "running",
        runningCode: params.runningCode,
    }

    return r;
}

export {
    Render,
    NewRenderParams,
    State,

    createRender,
    makeRender,
}