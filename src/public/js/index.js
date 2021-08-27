import { getMouseInfo } from "./modules/mouse.js"

$(() => {
    $(document).on("mousemove", () => {
        const info = getMouseInfo();
        $("#alert").html(`x=${info.x}, y=${info.y}, speedX=${info.speedX}, speedY=${info.speedY}`)
    });
})