import { getMouseInfo } from "./components/mouse.js"

$(() => {

    // random stuff
    $(document).on("mousemove", () => {
        const info = getMouseInfo();
        $("#alert").html(`x=${info.x}, y=${info.y}, speedX=${info.speedX}, speedY=${info.speedY}`)
    });


    // track resize event of list item, set the background accordingly
    // so that it looks like a clean look through
    const resizeObserver = new ResizeObserver(events => {
        events.forEach(event => {
            const rect = event.target.getBoundingClientRect();
            event.target.style.backgroundPosition = `${-rect.x}px ${-rect.y}px`;
        })
    });
    document.querySelectorAll(".list-item").forEach(item => {
        const rect = item.getBoundingClientRect();
        item.style.backgroundPosition = `${-rect.x}px ${-rect.y}px`;
        resizeObserver.observe(item);
    })
})