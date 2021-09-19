import { getMouseInfo } from "./components/mouse.js"

$(() => {

    // need consistency
    const backgroundHeight = 1080;  // px
    const backgroundWidth = 1920;  // px

    // random stuff
    $(document).on("mousemove", () => {
        const info = getMouseInfo();
        $("#alert").html(`x=${info.x}, y=${info.y}, speedX=${info.speedX}, speedY=${info.speedY}`)
    });

    // position the clear background in list-item on list-item resize, so that it match the background
    const resizeObserver = new ResizeObserver(events => {
        events.forEach(event => {
            makeClearMatchPositionOfBlur(event.target);
        })
    });
    document.querySelectorAll(".list-item").forEach(item => {
        makeClearMatchPositionOfBlur(item);
        resizeObserver.observe(item);
    })

    // position all list items on window resize
    window.addEventListener('resize', () => {
        document.querySelectorAll(".list-item").forEach(item => {
            makeClearMatchPositionOfBlur(item);
        })
    })

    function makeClearMatchPositionOfBlur(element) {
        const elementRect = element.getBoundingClientRect();
        const elementBackground = element.querySelector('.background-image');
        elementBackground.style.left = `${-elementRect.x}px`;
        elementBackground.style.top = `${-elementRect.y}px`;
    }
})