import { addClass, addSiblingsClass, removeSiblingsClass, removeClass } from "../components/utils.js";


(() => {

    const hoverSiblingClass = "list-item-hover-in-siblings";
    const hoverInClass = "list-item-hover-in";
    const hoverOutClass = "list-item-hover-out";
    const mousedownClass = "list-item-mouse-down";

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
            addClass(event.target, hoverInClass);
            removeClass(event.target, hoverOutClass);
            addSiblingsClass(event.target, hoverSiblingClass);
        })

        listItem.addEventListener("mouseout", event => {
            removeClass(event.target, hoverInClass);
            addClass(event.target, hoverOutClass);
            removeSiblingsClass(event.target, hoverSiblingClass);
        })
    })

})()