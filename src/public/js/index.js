import { getMouseInfo } from "./components/mouse.js"
import {getComputedStyle} from "./components/utils.js"

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

    // translate top & bottom face to correct place
    const listItem = document.querySelector('.list-item');
    document.querySelectorAll(".cube-face-top").forEach(item => {
        const currentTransform = getComputedStyle(item, 'transform');
        console.log(currentTransform);
        console.log(listItem.offsetHeight);
        // item.style.transform = currentTransform + ` translateZ(-${listItem.offsetHeight / 2}px)`;
        console.log(item.style.transform);
    })
})