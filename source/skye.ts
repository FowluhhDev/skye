import { Render, NewRenderParams, createRender, makeRender, State } from "./types/render";
import { RenderListType, attachRenderList, getRenderFromID } from "./types/renderList";
import { loop, isPlaying, fps } from "./core/loop";
import { setState } from "./utils/setState";
import { initSkye } from "./core/init";

declare global {
  interface Window {
    renderList: RenderListType;
  }
}

export {
    // Types
    NewRenderParams,
    RenderListType,
    Render,
    State,

    // Functions
    attachRenderList,
    getRenderFromID,
    createRender,
    makeRender,
    initSkye,
    setState,
    loop,

    // Variables
    isPlaying,
    fps,
}