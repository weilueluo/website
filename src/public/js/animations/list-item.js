import { addClass, addSiblingsClass, removeSiblingsClass, removeClass } from "../components/utils.js";


(() => {

    const hoverSiblingClass = "list-item-hover-siblings";
    const hoverClass = "list-item-hover";
    const mousedownClass = "list-item-mouse-down";

    const cubeRotateLeftClass = "cube-rotate-left";
    const cubeRotateRightClass = "cube-rotate-right";

    document.querySelectorAll(".list-item").forEach(listItem => {

        /* click */

        listItem.addEventListener("mousedown", event => {
            addClass(event.target, mousedownClass);
            
            // if mousedown inside but mouseup outside
            document.addEventListener("mouseup", documentEvent => {
                if (!documentEvent.composedPath().includes(event.target)) {
                    removeClass(event.target, mousedownClass);
                }
            }, { once: true })
        })

        listItem.addEventListener("mouseup", event => {
            removeClass(event.target, mousedownClass);
        })

        /* hover */

        listItem.addEventListener("mouseenter", event => {
            if (Math.random() < 0.5) {
                addClass(event.target, cubeRotateLeftClass);
            } else {
                addClass(event.target, cubeRotateRightClass);
            }
            addClass(event.target, hoverClass);
            addSiblingsClass(event.target, hoverSiblingClass);
        })

        listItem.addEventListener("mouseout", event => {
            removeClass(event.target, hoverClass, cubeRotateLeftClass, cubeRotateRightClass);
            removeSiblingsClass(event.target, hoverSiblingClass);
        })
    })

})()