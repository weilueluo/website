import { getMouseInfo } from "./components/mouse.js"
import { getComputedStyles } from "./components/utils.js"

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
        document.querySelectorAll(".list-item").forEach(item => {
            makeMatchBackgroundImage(item);
        })
    })

    function makeMatchBackgroundImage(element, transition=true) {
        const elementRect = element.getBoundingClientRect();
        // const styles = getComputedStyles(element);
        // const paddingTop = parseFloat(styles.getPropertyValue("padding-top"));
        // const paddingLeft = parseFloat(styles.getPropertyValue("padding-left"));
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