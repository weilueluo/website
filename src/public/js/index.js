import { getMouseInfo } from "./components/mouse.js"
import { getComputedStyles } from "./components/utils.js"

$(() => {

    // need consistency
    const backgroundHeight = 1080;  // px
    const backgroundWidth = 1920;  // px

    // position the clear background in list-item on list-item resize, so that it match the background
    const resizeObserver = new ResizeObserver(events => {
        events.forEach(event => {
            makeMatchBackgroundImage(event.target);
        })
    });
    document.querySelectorAll(".list-item, #title").forEach(item => {
        makeMatchBackgroundImage(item, false);
        resizeObserver.observe(item);

        item.addEventListener("transitionend", () => {
            makeMatchBackgroundImage(item);
        })

        item.addEventListener("animationend", () => {
            makeMatchBackgroundImage(item);
        })
    })

    // position all list items on window resize
    window.addEventListener('resize', () => {
        document.querySelectorAll(".list-item, #title").forEach(item => {
            makeMatchBackgroundImage(item);
        })
    })

    function makeMatchBackgroundImage(element, transition=true) {
        const elementRect = element.getBoundingClientRect();
        element.querySelectorAll('.background-image').forEach(background => {
            if (transition) {
                background.style.transition = "left 0.5s, top 0.5s";
            } else {
                background.style.transition = "";
            }
            background.style.left = `${-elementRect.x}px`;
            background.style.top = `${-elementRect.y}px`;
        });
    }
})