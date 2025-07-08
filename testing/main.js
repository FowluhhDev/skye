import * as skye from "../dist/skye.mjs";

let mouseX, mouseY;

document.addEventListener("mousemove", (ev) => {
    mouseX = ev.clientX;
    mouseY = ev.clientY;
});

let renderList = [];

skye.initSkye(renderList);
skye.loop();

const obj = document.createElement("h1");
obj.textContent = "Hello, world!";

obj.style.position = "fixed";

document.body.appendChild(obj);

skye.createRender({
    id: 1,
    runningCode: () => {
        skye.setState(skye.getRenderFromID(1), "waiting");
        obj.style.left = mouseX + "px";
        obj.style.top = mouseY + "px";
        skye.setState(skye.getRenderFromID(1), "running");
    },
});
