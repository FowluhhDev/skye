/**
 * The playing variable
 * @since 0.0.1
 */
let isPlaying = true;
/**
 * The framerate
 * @since 0.0.1
 */
let fps = 240;

/**
 * Starts the render loop for Skye
 * @returns {any}
 * @since v0.0.1
 */

function loop() {
    if (isPlaying) setTimeout(loop, 1000 / fps);

    for (const render of window.renderList) {
        switch (render.state) {    
            case "running":
                render.runningCode();
                break;
        
            case "killed":
                var index = window.renderList.indexOf(render)
                if (index >= 0) window.renderList.splice(index, 1)
                break;
        
            default:
                break;
        }
    }
}

export {
    loop,

    isPlaying,
    fps,
}