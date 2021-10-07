import { getMouseInfo } from "./components/mouse.js"

$(() => {

    // need consistency
    const backgroundHeight = 1080;  // px
    const backgroundWidth = 1920;  // px

    // random stuff
    $(document).on("mousemove", () => {
        const info = getMouseInfo();
        $("#alert").html(`x=${info.x}, y=${info.y}, speedX=${info.speedX}, speedY=${info.speedY}`);
    });

    // position the clear background in list-item on list-item resize, so that it match the background
    const resizeObserver = new ResizeObserver(events => {
        events.forEach(event => {
            makeMatchBackgroundImage(event.target);
        })
    });
    document.querySelectorAll(".list-item").forEach(item => {
        makeMatchBackgroundImage(item);
        resizeObserver.observe(item);
    })

    // position all list items on window resize
    window.addEventListener('resize', () => {
        document.querySelectorAll(".list-item").forEach(item => {
            makeMatchBackgroundImage(item);
        })
    })

    function makeMatchBackgroundImage(element) {
        const elementRect = element.getBoundingClientRect();
        element.querySelectorAll('.background-image').forEach(background => {
            background.style.left = `${-elementRect.x}px`;
            background.style.top = `${-elementRect.y}px`;
        });
    }

})